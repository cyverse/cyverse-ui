import { parse } from 'react-docgen';
import path from 'path';
import writeJson from 'write-json';
import { readFile, readdir, stat } from 'fs';

// eslint-disable-next-line no-undef
const srcDir = path.resolve(__dirname, '../src');
const componentRegex = /^([A-Z][a-z]+)+\.js/;


// eslint-disable-next-line no-console
console.log("\nDocGen Source:\n", srcDir, "\n\nComponents Parsed:");
function readWrite(componentPath) {
    const relativePath = path.parse(path.relative(srcDir, componentPath));
    readFile(componentPath, 'utf8', (err, src) => {
        const docObj = parse(src);
        const fileName = relativePath.name + '.json';
        writeJson(fileName, docObj, err => {
            // eslint-disable-next-line no-console
            if (err) console.log(err);
	});
    });
}

function buildDocFiles(dir) {
  readdir(dir, (err, items) => {
    items.forEach(item => {
      const itemPath = path.resolve(dir, item);
      stat(itemPath, (err2, stats) => {
        if (stats.isDirectory()) {
          return;
        }
        if (!componentRegex.test(item)) {
          return;
        }
        // eslint-disable-next-line no-console
        console.log(itemPath);
        readWrite(itemPath);
      });
    });
  });
}

buildDocFiles(srcDir);
