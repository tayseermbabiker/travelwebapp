'use client';

import { useState } from 'react';
import { Play, Eye, ThumbsUp, ChevronDown, ChevronUp } from 'lucide-react';
import vlogData from '@/lib/database/youtube-vlogs.json';

interface Video {
  videoId: string;
  title: string;
  channelTitle: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: number;
  viewCountFormatted: string;
  likeCount: number;
  duration: string;
  url: string;
}

interface PageData {
  videoCount: number;
  topCreators: string[];
  videos: Video[];
}

interface CreatorInsightsProps {
  page: string;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const months = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30));
  if (months < 1) return 'This month';
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

export default function CreatorInsights({ page }: CreatorInsightsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const pageData = (vlogData.pages as Record<string, PageData>)[page];
  if (!pageData || pageData.videos.length === 0) return null;

  const visibleVideos = showAll ? pageData.videos : pageData.videos.slice(0, 6);
  const hasMore = pageData.videos.length > 6;

  const totalViews = pageData.videos.reduce((sum, v) => sum + v.viewCount, 0);
  const totalViewsFormatted = totalViews >= 1_000_000
    ? `${(totalViews / 1_000_000).toFixed(1)}M`
    : `${(totalViews / 1_000).toFixed(0)}K`;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      {/* Collapsed header -- always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">
            What Creators Are Saying
          </h2>
          <div className="flex items-center gap-2 text-teal-600 font-medium text-sm">
            {isExpanded ? 'Hide' : `${pageData.videos.length} Videos`}
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          We analyzed {pageData.videos.length} travel vlogs from {pageData.topCreators.length}+ creators
          with {totalViewsFormatted} combined views.
        </p>

        {/* Top creators bar -- always visible as a teaser */}
        <div className="flex flex-wrap gap-2 mt-3">
          {pageData.topCreators.map((creator) => (
            <span
              key={creator}
              className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full"
            >
              {creator}
            </span>
          ))}
        </div>
      </button>

      {/* Expanded content -- video grid */}
      {isExpanded && (
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleVideos.map((video) => (
              <a
                key={video.videoId}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={video.thumbnail}
                    alt={decodeHtmlEntities(video.title)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-xs font-medium rounded">
                      {video.duration}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-teal-700 transition-colors">
                    {decodeHtmlEntities(video.title)}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{video.channelTitle}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.viewCountFormatted}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      {video.likeCount >= 1000 ? `${(video.likeCount / 1000).toFixed(0)}K` : video.likeCount}
                    </span>
                    <span>{timeAgo(video.publishedAt)}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {hasMore && (
            <button
              onClick={(e) => { e.stopPropagation(); setShowAll(!showAll); }}
              className="mt-6 w-full py-3 text-center text-teal-600 font-medium hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show All {pageData.videos.length} Videos <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          )}

          <p className="mt-4 text-xs text-gray-400 text-center">
            Video data updated {timeAgo(vlogData.lastUpdated)} via YouTube Data API
          </p>
        </div>
      )}
    </div>
  );
}
