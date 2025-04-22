import fs from 'fs';
import path from 'path';

function searchFiles(dir, keyword, results) {
  const filesAndDirs = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of filesAndDirs) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchFiles(fullPath, keyword, results);
    } else if (entry.isFile()) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(keyword)) {
        results.push(fullPath);
      }
    }
  }
}

const args = process.argv.slice(2);
const targetPath = args[0];
const keyword = args[1];

if (!targetPath || !keyword) {
  console.error('Usage: node find-by-tag.js <path> <keyword>');
  process.exit(1);
}

const results = [];
searchFiles(targetPath, keyword, results);

results.forEach(filePath => console.log(filePath));
