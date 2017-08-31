const
  { promisify } = require('util'),
  fs = require('fs'),
  readdir = promisify(fs.readdir),
  endOfLine = require('os').EOL;



main();

async function main() {
  const dir = './corpus/'
  const files = await readdir(dir);
  await writeCharacter('bender', files);
}

async function writeCharacter(character, files) {
  const path = './corpus/bender.txt';
  const writeStream = fs.createReadStream(path);

  for(const file of files) {
    const contents = await parseFile(character, file);
    contents.split(endOfLine).forEach(line => {
      
    });
  }
}

async function parseFile(character, file) {

} 