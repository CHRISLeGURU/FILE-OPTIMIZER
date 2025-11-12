import fs from "fs-extra";
import sharp from "sharp";

// file paths and settings
const inputDir = "originals_pictures";
const outputDir = "optimized_pictures";
const maxWidth = 1600;
const quality = 80;

await fs.ensureDir(outputDir);

const files = await fs.readdir(inputDir);
for (const file of files) {
  if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;

  const inputPath = `${inputDir}/${file}`;
  const outputPath = `${outputDir}/${file.split(".")[0]}.webp`;

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const resizeOptions = metadata.width && metadata.width > maxWidth ? { width: maxWidth } : {};

  await image
    .resize(resizeOptions)
    .webp({ quality })
    .toFile(outputPath);

  const sizeKb = (fs.statSync(outputPath).size / 1024).toFixed(1);
  console.log(`✅ ${file} → ${sizeKb} Ko`);
}

console.log("🎉 Optimisation terminée !");
