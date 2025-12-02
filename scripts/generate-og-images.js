const fs = require('fs');
const path = require('path');

// OG Image dimensions
const WIDTH = 1200;
const HEIGHT = 630;

// Brand colors
const TEAL = '#14b8a6';
const DARK = '#0f172a';

// Pages to generate OG images for
const pages = [
  {
    filename: 'og-default.jpg',
    title: 'WANDER',
    subtitle: 'AI-Powered Travel Planning',
    gradient: ['#0f172a', '#1e3a5f'],
  },
  {
    filename: 'og-solo-female.jpg',
    title: 'Solo Female Travel',
    subtitle: 'Safest Destinations 2025',
    gradient: ['#831843', '#be185d'],
  },
  {
    filename: 'og-budget.jpg',
    title: 'Budget Travel',
    subtitle: 'Amazing Trips Under $50/Day',
    gradient: ['#065f46', '#059669'],
  },
  {
    filename: 'og-digital-nomad.jpg',
    title: 'Digital Nomad',
    subtitle: 'Best Cities to Work Remotely',
    gradient: ['#1e40af', '#3b82f6'],
  },
  {
    filename: 'og-family.jpg',
    title: 'Family Travel',
    subtitle: 'Kid-Friendly Destinations',
    gradient: ['#c2410c', '#ea580c'],
  },
  {
    filename: 'og-adventure.jpg',
    title: 'Adventure Travel',
    subtitle: 'Thrilling Destinations 2025',
    gradient: ['#15803d', '#22c55e'],
  },
  {
    filename: 'og-wellness.jpg',
    title: 'Wellness Retreats',
    subtitle: 'Spa & Yoga Destinations',
    gradient: ['#7e22ce', '#a855f7'],
  },
  {
    filename: 'og-seasons.jpg',
    title: 'Travel by Season',
    subtitle: 'Best Destinations Year-Round',
    gradient: ['#0369a1', '#0ea5e9'],
  },
  {
    filename: 'og-foodie.jpg',
    title: 'Foodie Destinations',
    subtitle: 'Best Culinary Travel 2025',
    gradient: ['#b91c1c', '#ef4444'],
  },
  {
    filename: 'og-festivals.jpg',
    title: 'World Festivals',
    subtitle: 'Must-See Events 2025',
    gradient: ['#a21caf', '#e879f9'],
  },
];

// Generate SVG for each OG image
function generateSVG(page) {
  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${page.gradient[0]}"/>
      <stop offset="100%" style="stop-color:${page.gradient[1]}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>

  <!-- Decorative circles -->
  <circle cx="1100" cy="100" r="200" fill="rgba(255,255,255,0.03)"/>
  <circle cx="100" cy="530" r="150" fill="rgba(255,255,255,0.03)"/>

  <!-- Content -->
  <text x="80" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="white">
    ${page.title}
  </text>
  <text x="80" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="36" fill="rgba(255,255,255,0.8)">
    ${page.subtitle}
  </text>

  <!-- Brand -->
  <rect x="80" y="480" width="60" height="4" fill="${TEAL}" rx="2"/>
  <text x="80" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="${TEAL}">
    WANDER
  </text>
  <text x="220" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="rgba(255,255,255,0.6)">
    Your Perfect Trip, Perfectly Planned
  </text>
</svg>`;
}

// Main execution
const publicDir = path.join(__dirname, '..', 'public');

console.log('Generating OG images as SVG files...\n');

pages.forEach(page => {
  const svg = generateSVG(page);
  const svgFilename = page.filename.replace('.jpg', '.svg');
  const filepath = path.join(publicDir, svgFilename);

  fs.writeFileSync(filepath, svg);
  console.log(`✓ Created: ${svgFilename}`);
});

console.log('\n========================================');
console.log('SVG files created in /public folder');
console.log('========================================');
console.log('\nNote: For production, convert these to JPG/PNG using:');
console.log('- Online: svgtopng.com or cloudconvert.com');
console.log('- Or use: npx sharp-cli (requires sharp package)');
console.log('\nFor now, update your layout files to use .svg instead of .jpg');
