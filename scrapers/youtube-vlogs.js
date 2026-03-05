/**
 * YouTube Travel Vlogs Scraper
 * Uses YouTube Data API v3 to find top travel vlogs per destination
 * Outputs structured data to lib/database/youtube-vlogs.json
 *
 * Usage: YOUTUBE_API_KEY=xxx node scrapers/youtube-vlogs.js
 * API Key: https://console.cloud.google.com/apis/credentials (enable YouTube Data API v3)
 * Free quota: 10,000 units/day (search = 100 units, videos.list = 1 unit)
 */

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
  console.error('Missing YOUTUBE_API_KEY environment variable');
  console.error('Get one at: https://console.cloud.google.com/apis/credentials');
  process.exit(1);
}

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const OUTPUT_PATH = path.join(__dirname, '..', 'lib', 'database', 'youtube-vlogs.json');

// Search queries mapped to guide pages
// Each entry: { page, queries[] }
// We search multiple queries per page to get diverse, high-quality results
const SEARCH_CONFIG = [
  {
    page: 'foodie-destinations',
    queries: [
      { q: 'best food cities in the world travel vlog', maxResults: 5 },
      { q: 'street food Tokyo travel', maxResults: 3 },
      { q: 'Bangkok street food tour', maxResults: 3 },
      { q: 'Italy food travel vlog', maxResults: 3 },
      { q: 'Mexico City food guide', maxResults: 3 },
      { q: 'Lima Peru food travel', maxResults: 2 },
    ],
  },
  {
    page: 'solo-female-travel',
    queries: [
      { q: 'solo female travel tips safety', maxResults: 5 },
      { q: 'solo female travel Japan safe', maxResults: 3 },
      { q: 'solo female travel Europe', maxResults: 3 },
      { q: 'solo female travel Southeast Asia', maxResults: 3 },
      { q: 'traveling alone as a woman', maxResults: 3 },
    ],
  },
  {
    page: 'family-travel',
    queries: [
      { q: 'family travel with kids best destinations', maxResults: 5 },
      { q: 'traveling with toddler tips', maxResults: 3 },
      { q: 'family vacation Japan kids', maxResults: 3 },
      { q: 'family travel Europe with children', maxResults: 3 },
      { q: 'best family resorts travel vlog', maxResults: 3 },
    ],
  },
  {
    page: 'seasons',
    queries: [
      { q: 'best time to visit Europe travel guide', maxResults: 4 },
      { q: 'best time to visit Southeast Asia', maxResults: 3 },
      { q: 'winter travel destinations warm', maxResults: 3 },
      { q: 'shoulder season travel tips save money', maxResults: 3 },
      { q: 'cherry blossom Japan when to go', maxResults: 3 },
    ],
  },
  {
    page: 'wellness-retreats',
    queries: [
      { q: 'wellness retreat Bali yoga experience', maxResults: 4 },
      { q: 'best spa destinations world', maxResults: 3 },
      { q: 'meditation retreat experience vlog', maxResults: 3 },
      { q: 'Thailand detox retreat review', maxResults: 3 },
      { q: 'wellness travel transformation', maxResults: 2 },
    ],
  },
  {
    page: 'adventure-travel',
    queries: [
      { q: 'adventure travel best destinations', maxResults: 4 },
      { q: 'bungee jumping New Zealand travel', maxResults: 3 },
      { q: 'trekking Nepal Everest base camp vlog', maxResults: 3 },
      { q: 'Costa Rica adventure travel', maxResults: 3 },
      { q: 'Patagonia hiking travel vlog', maxResults: 3 },
    ],
  },
  {
    page: 'budget-travel',
    queries: [
      { q: 'budget travel under $30 a day', maxResults: 5 },
      { q: 'cheapest countries to travel', maxResults: 3 },
      { q: 'Vietnam budget travel vlog', maxResults: 3 },
      { q: 'backpacking Southeast Asia budget', maxResults: 3 },
      { q: 'budget travel tips save money', maxResults: 3 },
    ],
  },
  {
    page: 'digital-nomad',
    queries: [
      { q: 'digital nomad Chiang Mai experience', maxResults: 4 },
      { q: 'best cities remote work digital nomad', maxResults: 4 },
      { q: 'digital nomad Lisbon coworking', maxResults: 3 },
      { q: 'Bali digital nomad cost of living', maxResults: 3 },
      { q: 'digital nomad visa how to', maxResults: 2 },
    ],
  },
  {
    page: 'festivals',
    queries: [
      { q: 'Holi festival India travel experience', maxResults: 3 },
      { q: 'Carnival Rio de Janeiro vlog', maxResults: 3 },
      { q: 'Tomorrowland festival experience', maxResults: 3 },
      { q: 'Songkran Thailand water festival', maxResults: 3 },
      { q: 'best festivals around the world travel', maxResults: 4 },
    ],
  },
];

// Rate limiter - YouTube API allows ~10 req/sec but let's be respectful
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Search YouTube for videos
async function searchVideos(query, maxResults = 5) {
  const params = new URLSearchParams({
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: String(maxResults),
    order: 'relevance',
    videoDuration: 'medium', // 4-20 minutes (actual travel vlogs, not shorts)
    relevanceLanguage: 'en',
    key: API_KEY,
  });

  const res = await fetch(`${BASE_URL}/search?${params}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`YouTube search failed: ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  return data.items || [];
}

// Get video statistics (views, likes) in batch
async function getVideoStats(videoIds) {
  if (videoIds.length === 0) return {};

  const params = new URLSearchParams({
    part: 'statistics,contentDetails',
    id: videoIds.join(','),
    key: API_KEY,
  });

  const res = await fetch(`${BASE_URL}/videos?${params}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`YouTube videos.list failed: ${err.error?.message || res.statusText}`);
  }

  const data = await res.json();
  const stats = {};
  for (const item of data.items || []) {
    stats[item.id] = {
      viewCount: parseInt(item.statistics.viewCount || '0', 10),
      likeCount: parseInt(item.statistics.likeCount || '0', 10),
      commentCount: parseInt(item.statistics.commentCount || '0', 10),
      duration: item.contentDetails?.duration || '',
    };
  }
  return stats;
}

// Parse ISO 8601 duration to human-readable
function parseDuration(iso) {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';
  const h = parseInt(match[1] || '0', 10);
  const m = parseInt(match[2] || '0', 10);
  const s = parseInt(match[3] || '0', 10);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s}s`;
}

// Format view count (e.g., 1234567 -> "1.2M")
function formatViews(count) {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K`;
  return String(count);
}

async function scrapePageVlogs(config) {
  const allVideos = new Map(); // dedup by video ID

  for (const { q, maxResults } of config.queries) {
    console.log(`  Searching: "${q}" (max ${maxResults})`);
    try {
      const results = await searchVideos(q, maxResults);

      for (const item of results) {
        const videoId = item.id.videoId;
        if (allVideos.has(videoId)) continue; // skip dupes

        allVideos.set(videoId, {
          videoId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || '',
          description: (item.snippet.description || '').slice(0, 300),
          searchQuery: q,
        });
      }

      await sleep(200); // small delay between searches
    } catch (err) {
      console.error(`  Error searching "${q}":`, err.message);
    }
  }

  // Batch fetch stats for all videos
  const videoIds = Array.from(allVideos.keys());
  console.log(`  Fetching stats for ${videoIds.length} videos...`);

  const stats = {};
  // YouTube allows max 50 IDs per request
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50);
    const batchStats = await getVideoStats(batch);
    Object.assign(stats, batchStats);
    if (i + 50 < videoIds.length) await sleep(200);
  }

  // Merge stats and build final array
  const videos = [];
  for (const [videoId, video] of allVideos) {
    const s = stats[videoId] || {};
    videos.push({
      ...video,
      viewCount: s.viewCount || 0,
      viewCountFormatted: formatViews(s.viewCount || 0),
      likeCount: s.likeCount || 0,
      commentCount: s.commentCount || 0,
      duration: parseDuration(s.duration || ''),
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });
  }

  // Sort by views (most popular first), then take top 15
  videos.sort((a, b) => b.viewCount - a.viewCount);
  return videos.slice(0, 15);
}

async function main() {
  console.log('YouTube Travel Vlogs Scraper');
  console.log('============================\n');

  const output = {
    lastUpdated: new Date().toISOString(),
    pages: {},
  };

  let totalQuotaUsed = 0;

  for (const config of SEARCH_CONFIG) {
    console.log(`\n[${config.page}]`);
    const searchCount = config.queries.reduce((sum, q) => sum + 1, 0);
    totalQuotaUsed += searchCount * 100; // each search = 100 quota units

    const videos = await scrapePageVlogs(config);
    totalQuotaUsed += Math.ceil(videos.length / 50); // videos.list = 1 unit per ID (batched)

    output.pages[config.page] = {
      videoCount: videos.length,
      topCreators: [...new Set(videos.map(v => v.channelTitle))].slice(0, 5),
      videos,
    };

    console.log(`  Result: ${videos.length} videos from ${new Set(videos.map(v => v.channelTitle)).size} creators`);
    if (videos[0]) {
      console.log(`  Top: "${videos[0].title}" by ${videos[0].channelTitle} (${videos[0].viewCountFormatted} views)`);
    }

    await sleep(500); // pause between pages
  }

  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`\nDone! Saved to ${OUTPUT_PATH}`);
  console.log(`Estimated API quota used: ~${totalQuotaUsed} units (limit: 10,000/day)`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
