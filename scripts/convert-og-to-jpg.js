const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

const svgFiles = [
  'og-default.svg',
  'og-solo-female.svg',
  'og-budget.svg',
  'og-digital-nomad.svg',
  'og-family.svg',
  'og-adventure.svg',
  'og-wellness.svg',
  'og-seasons.svg',
  'og-foodie.svg',
  'og-festivals.svg',
];

async function convertSvgToJpg() {
  console.log('Converting SVG files to JPG...\n');

  for (const svgFile of svgFiles) {
    const svgPath = path.join(publicDir, svgFile);
    const jpgFile = svgFile.replace('.svg', '.jpg');
    const jpgPath = path.join(publicDir, jpgFile);

    try {
      const svgBuffer = fs.readFileSync(svgPath);

      await sharp(svgBuffer)
        .resize(1200, 630)
        .jpeg({ quality: 90 })
        .toFile(jpgPath);

      console.log(`✓ Converted: ${svgFile} → ${jpgFile}`);

      // Remove the SVG file after successful conversion
      fs.unlinkSync(svgPath);
    } catch (error) {
      console.error(`✗ Error converting ${svgFile}:`, error.message);
    }
  }

  console.log('\n========================================');
  console.log('All OG images converted to JPG!');
  console.log('========================================');
}

convertSvgToJpg();
