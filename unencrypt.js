// unencrypt example
// this outputs the file to stdout, so youll need to redirect it
// example: node unencrypt.js > new_unencrypted.pkx
// md5sum skitty_unencrypted.pkx new_unencrypted.pkx
// notice the code is identical to the encrypt version aside
// from the filename. the load function determines if the file
// is encrypted or not, and makes both available through the 
// object.

var pokemon = require('pokemonxy');
var fs      = require('fs');

var skittypkx = fs.readFileSync('skitty_encrypted.pkx');
var skitty = Object.create(pokemon.PKX);
skitty.load(skittypkx);
process.stdout.write(skitty.pkxUnencrypted);
