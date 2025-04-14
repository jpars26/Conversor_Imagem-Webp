const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const inputFolder = "./images"; // Pasta de entrada
const outputFolder = "./converted-webp"; // Pasta de saída

fs.ensureDirSync(outputFolder); // Garante que a pasta de saída existe

/**
 * Converte uma imagem para WebP
 * @param {string} inputPath - Caminho da imagem de entrada
 * @param {string} outputPath - Caminho da imagem convertida
 * @returns {Promise<void>}
 */
const convertImageToWebp = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .toFormat("webp")
      .webp({ quality: 80 }) // Ajuste a qualidade conforme necessário
      .toFile(outputPath);
    console.log(`✅ Convertido: ${inputPath} → ${outputPath}`);
  } catch (error) {
    console.error(`❌ Erro ao converter ${inputPath}:`, error);
  }
};

/**
 * Função principal para converter todas as imagens da pasta
 */
const convertAllImages = async () => {
  try {
    const files = await fs.readdir(inputFolder);

    const conversions = files
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file)) // Filtra apenas imagens
      .map((file) => {
        const inputPath = path.join(inputFolder, file);
        const outputPath = path.join(outputFolder, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));
        return convertImageToWebp(inputPath, outputPath);
      });

    await Promise.all(conversions);
  } catch (error) {
    console.error("❌ Erro ao processar as imagens:", error);
  }
};

// ⚡ Execute automaticamente se chamado diretamente
if (require.main === module) {
  convertAllImages();
}

module.exports = { convertImageToWebp, convertAllImages };
