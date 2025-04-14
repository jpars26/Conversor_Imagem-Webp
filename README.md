# 🖼️ Image to WebP Converter

> Um conversor simples e eficiente de imagens `.jpg`, `.jpeg` e `.png` para `.webp`, ideal para otimizar imagens para web.

## 🚀 Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Sharp](https://img.shields.io/badge/Sharp-00BFFF?style=for-the-badge)
![fs-extra](https://img.shields.io/badge/fs--extra-555555?style=for-the-badge)

---

## 📁 Estrutura de Pastas

```bash
.
├── images/             # Pasta onde você coloca as imagens originais
├── converted-webp/     # Pasta onde as imagens convertidas serão salvas
└── index.js            # Script de conversão principal

 ⚙️ Como Usar
1. Clone este repositório

    git clone https://github.com/seu-usuario/image-webp-converter.git
    cd image-webp-converter
2. Instale as dependências
    npm install
3. Adicione suas imagens
    Coloque as imagens .jpg, .jpeg ou .png na pasta: ./images
4. Execute o script
    node index.js
5. Verifique os arquivos convertidos
    As imagens otimizadas serão salvas automaticamente na pasta: ./converted-webp
✅ Exemplo de Saída
    ✅ Convertido: ./images/foto1.jpg → ./converted-webp/foto1.webp
    ✅ Convertido: ./images/banner.png → ./converted-webp/banner.webp
    
📌 Observações
    A pasta converted-webp/ será criada automaticamente se não existir.

O script só converte arquivos com extensões .jpg, .jpeg e .png.

A qualidade padrão das imagens .webp geradas é 80 (pode ser ajustada no código).

🤝 Contribuindo
Sinta-se à vontade para abrir issues ou pull requests com sugestões e melhorias. Este projeto é simples, mas pode crescer com sua ajuda! 🚀

