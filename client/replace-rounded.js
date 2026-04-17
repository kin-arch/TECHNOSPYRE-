import fs from 'fs';
import path from 'path';

const searchDirs = [
  path.join(process.cwd(), 'src/components'),
  path.join(process.cwd(), 'src/pages'),
];

const ignorePatterns = [];

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

// Regex to match all rounded classes EXCEPT rounded-full, rounded-[50%], etc.
// We use a replacer function to skip specific ones.
const regex = /\brounded-(sm|md|lg|xl|2xl|3xl|4xl|t|r|b|l|tl|tr|bl|br|none|[a-zA-Z0-9\[\]\-]*px[a-zA-Z0-9\[\]\-]*)\b|\brounded\b/g;

let count = 0;

searchDirs.forEach(dir => {
  walkDir(dir, (filePath) => {
    if (ignorePatterns.some(p => p.test(filePath))) return;

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Custom replacer to keep rounded-full intact
    const newContent = content.replace(/\brounded(-[a-zA-Z0-9\[\]\-]+)?\b/g, (match) => {
      if (match === 'rounded-full' || match === 'rounded-[50%]') {
         return match; // preserve circles
      }
      // For specific sides like rounded-t-lg, we want to replace with rounded-sm (or replace the suffix with sm)
      // If they just want "all the site rounded to sm", turning rounded-t-lg to rounded-sm will apply it everywhere, which might be okay.
      // Let's replace any radius definition that isn't full with rounded-sm.
      if (match.startsWith('rounded-t-') || match.startsWith('rounded-b-') || match.startsWith('rounded-l-') || match.startsWith('rounded-r-') || match.startsWith('rounded-tl-') || match.startsWith('rounded-tr-') || match.startsWith('rounded-bl-') || match.startsWith('rounded-br-')) {
          // Replace the size part with sm
          const parts = match.split('-');
          parts.pop(); // remove size (lg, md, xl, etc)
          return parts.join('-') + '-sm';
      }
      return 'rounded-sm';
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
      count++;
    }
  });
});

console.log(`Replacement complete. Modified ${count} files.`);
