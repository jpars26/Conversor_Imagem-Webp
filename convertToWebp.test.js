const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");
const { convertImageToWebp } = require("../convertToWebp");

// Mocka as funções do fs-extra
jest.mock("fs-extra");

describe("Conversor de Imagens JPG para WebP", () => {
  const inputFolder = "./images";
  const outputFolder = "./converted-webp";

  beforeEach(() => {
    fs.readdirSync.mockReset();
    fs.ensureDirSync.mockReset();
    fs.writeFileSync = jest.fn(); // Impede a criação real de arquivos
  });

  test("Verifica se a conversão de uma imagem é bem-sucedida", async () => {
    const mockImagePath = path.join(inputFolder, "test-image.jpg");
    const mockWebpPath = path.join(outputFolder, "test-image.webp");

    fs.readdirSync.mockReturnValue(["test-image.jpg"]); // Simula arquivos
    fs.ensureDirSync.mockReturnValue(true);

    sharp.mockImplementation(() => ({
      toFormat: jest.fn().mockReturnThis(),
      webp: jest.fn().mockReturnThis(),
      toFile: jest.fn().mockResolvedValue(mockWebpPath),
    }));

    await convertImageToWebp(mockImagePath, mockWebpPath);

    expect(fs.ensureDirSync).toHaveBeenCalledWith(outputFolder);
    expect(sharp).toHaveBeenCalledWith(mockImagePath);
    expect(sharp().toFile).toHaveBeenCalledWith(mockWebpPath);
  });

  test("Ignora arquivos que não são imagens JPG/JPEG/PNG", async () => {
    const mockImagePath = path.join(inputFolder, "test-file.txt");
    const mockWebpPath = path.join(outputFolder, "test-file.webp");

    fs.readdirSync.mockReturnValue(["test-file.txt"]); // Simula arquivo inválido
    fs.ensureDirSync.mockReturnValue(true);

    await convertImageToWebp(mockImagePath, mockWebpPath);

    expect(sharp).not.toHaveBeenCalled(); // Verifica se o sharp() NÃO foi chamado
  });
});
