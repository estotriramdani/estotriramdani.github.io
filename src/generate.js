const fs = require("fs");
const path = require("path");
const content = require("./content");
const { renderIndex, renderSitemap, renderRobots } = require("./template");

const ROOT_DIR = path.resolve(__dirname, "..");

function writeFile(fileName, content) {
  const filePath = path.join(ROOT_DIR, fileName);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Generated: ${fileName}`);
}

function main() {
  const html = renderIndex(content);
  const sitemap = renderSitemap(content.profile);
  const robots = renderRobots(content.profile);

  writeFile("index.html", html);
  writeFile("sitemap.xml", sitemap);
  writeFile("robots.txt", robots);

  console.log("\nBuild complete.");
}

main();
