const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7e22ce"/>
      <stop offset="100%" style="stop-color:#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <circle cx="1100" cy="100" r="200" fill="rgba(255,255,255,0.03)"/>
  <circle cx="100" cy="530" r="150" fill="rgba(255,255,255,0.03)"/>
  <text x="80" y="280" font-family="system-ui, sans-serif" font-size="72" font-weight="bold" fill="white">Wellness Retreats</text>
  <text x="80" y="360" font-family="system-ui, sans-serif" font-size="36" fill="rgba(255,255,255,0.8)">Spa and Yoga Destinations</text>
  <rect x="80" y="480" width="60" height="4" fill="#14b8a6" rx="2"/>
  <text x="80" y="540" font-family="system-ui, sans-serif" font-size="28" font-weight="600" fill="#14b8a6">WANDER</text>
  <text x="220" y="540" font-family="system-ui, sans-serif" font-size="20" fill="rgba(255,255,255,0.6)">Your Perfect Trip, Perfectly Planned</text>
</svg>`;

async function createWellnessJpg() {
  const jpgPath = path.join(publicDir, 'og-wellness.jpg');

  await sharp(Buffer.from(svg))
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(jpgPath);

  console.log('✓ Created og-wellness.jpg');
}

createWellnessJpg();
