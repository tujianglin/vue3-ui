const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../../dist/src/components/index.d.ts');

fs.readFile(file, (err, data) => {
  const content = data.toString('utf-8');
  const res = content.replace(/@\/components/g, '.');
  fs.writeFileSync(file, res);
});
