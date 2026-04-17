import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processComponent(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // We want to remove classes like bg-gradient-to-r, bg-gradient-to-t, etc.
  // from-* via-* to-*
  // Also text-transparent, bg-clip-text
  
  content = content.replace(/\bbg-gradient-to-[a-z]+\b/g, '');
  content = content.replace(/\bfrom-[a-zA-Z0-9/-]+\b/g, '');
  content = content.replace(/\bvia-[a-zA-Z0-9/-]+\b/g, '');
  content = content.replace(/\bto-[a-zA-Z0-9/-]+\b/g, '');
  content = content.replace(/\btext-transparent\b/g, '');
  content = content.replace(/\bbg-clip-text\b/g, '');
  
  // Custom classes from CSS
  content = content.replace(/\bgradient-text\b/g, 'text-primary');
  content = content.replace(/\btext-shimmer\b/g, 'text-primary');
  content = content.replace(/\bhero-gradient\b/g, 'bg-surface-darker');
  content = content.replace(/\bglow-border\b/g, '');
  content = content.replace(/\bhero-particle\b/g, 'hidden');

  // Clean up multiple spaces inside classNames
  // E.g., className=" flex  items-center   " -> className="flex items-center"
  content = content.replace(/className=(["'])(.*?)\1/g, (match, quote, classes) => {
    let cleanClasses = classes.replace(/\s+/g, ' ').trim();
    return `className=${quote}${cleanClasses}${quote}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed:', filePath);
  }
}

walkDir('./src', processComponent);
console.log('Gradient stripping complete.');
