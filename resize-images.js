const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));

async function resizeImages() {
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const tempPath = path.join(imagesDir, `temp_${file}`);
    
    try {
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(tempPath);
      
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);
      
      const stats = fs.statSync(inputPath);
      console.log(`${file}: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

resizeImages();
