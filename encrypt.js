// encrypt example
// this outputs the file to stdout, so youll need to redirect it
// example: node encrypt.js > new_encrypted.pkx
// md5sum skitty_encrypted.pkx new_encrypted.pkx
// notice the code is identical to the unencrypt version aside
// from the filename. the load function determines if the file
// is encrypted or not, and makes both available through the 
// object.

var pokemon = require('pokemonxy');
var fs      = require('fs');

var skittypkx = fs.readFileSync('skitty_unencrypted.pkx');
var skitty = Object.create(pokemon.PKX);
skitty.load(skittypkx);
process.stdout.write(skitty.pkxEncrypted);
