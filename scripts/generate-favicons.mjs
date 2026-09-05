import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.resolve(__dirname, '../public/assets/logo.png');
const outputDir = path.resolve(__dirname, '../public');

async function generateFavicons() {
  console.log('Generating favicons...');

  try {
    // Generate standard PNG sizes
    await sharp(inputPath).resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(path.join(outputDir, 'favicon-16x16.png'));
    await sharp(inputPath).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(path.join(outputDir, 'favicon-32x32.png'));
    await sharp(inputPath).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(path.join(outputDir, 'android-chrome-192x192.png'));
    await sharp(inputPath).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(path.join(outputDir, 'android-chrome-512x512.png'));
    await sharp(inputPath).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Generate SVG wrapper
    const pngBuffer = fs.readFileSync(inputPath);
    const base64Data = pngBuffer.toString('base64');
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image href="data:image/png;base64,${base64Data}" width="512" height="512" />
</svg>`;
    fs.writeFileSync(path.join(outputDir, 'favicon.svg'), svgContent);
    
    // Also copy 32x32 to favicon.ico as a fallback
    await sharp(inputPath).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toFile(path.join(outputDir, 'favicon.ico'));

    console.log('Done generating favicons!');
  } catch (err) {
    console.error('Error generating favicons:', err);
  }
}

generateFavicons();
