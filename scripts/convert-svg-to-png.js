const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng() {
  const conversions = [
    {
      input: 'public/images/og/home-og.svg',
      output: 'public/images/og/home-og.png',
      width: 1200,
      height: 630,
    },
    {
      input: 'public/images/banners/linkedin-banner.svg',
      output: 'public/images/banners/linkedin-banner.png',
      width: 1584,
      height: 396,
    },
    {
      input: 'public/images/banners/facebook-banner.svg',
      output: 'public/images/banners/facebook-banner.png',
      width: 820,
      height: 312,
    },
  ];

  for (const item of conversions) {
    try {
      const inputPath = path.join(process.cwd(), item.input);
      const outputPath = path.join(process.cwd(), item.output);

      if (!fs.existsSync(inputPath)) {
        console.log(`Skipping ${item.input} - file not found`);
        continue;
      }

      await sharp(inputPath)
        .resize(item.width, item.height)
        .png()
        .toFile(outputPath);

      console.log(`Converted: ${item.input} -> ${item.output}`);
    } catch (error) {
      console.error(`Error converting ${item.input}:`, error.message);
    }
  }

  console.log('Done!');
}

convertSvgToPng();
