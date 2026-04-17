import fs from 'fs';
import path from 'path';

const searchDirs = [
  path.join(process.cwd(), 'src/components'),
  path.join(process.cwd(), 'src/pages'),
];

const ignorePatterns = [
  /home/i,
  /Home\.tsx$/i,
];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDir = fs.statSync(dirPath).isDirectory();
    if (isDir) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
      callback(dirPath);
    }
  });
}

const regex = /\brounded-[a-zA-Z0-9\[\]\-]+\b|\brounded\b/g;

let count = 0;

searchDirs.forEach(dir => {
  walkDir(dir, (filePath) => {
    // Check ignores
    if (ignorePatterns.some(p => p.test(filePath))) return;

    const content = fs.readFileSync(filePath, 'utf8');
    if (regex.test(content)) {
      const newContent = content.replace(regex, 'rounded-lg');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
      count++;
    }
  });
});

console.log(`Replacement complete. Modified ${count} files.`);
