// unencrypt example
// this outputs the file to stdout, so youll need to redirect it
// example: node unencrypt.js > new_unencrypted.pkx
// md5sum skitty_unencrypted.pkx new_unencrypted.pkx
// notice the code is identical to the encrypt version aside
// from the filename. the load function determines if the file
// is encrypted or not, and makes both available through the 
// object.

var pokemon = require('./index.js');
var fs      = require('fs');

var skittypkx = fs.readFileSync('skitty_encrypted.pkx');
var skitty = Object.create(pokemon.PKX);
skitty.load(skittypkx);

console.log('%s: %s', 'PkxEncryptionKey', skitty.readPkxEncryptionKey());
console.log('%s: %s', 'SanityPlaceholder', skitty.readSanityPlaceholder());
console.log('%s: %s', 'Checksum', skitty.readChecksum());
console.log('%s: %s', 'NationalPokedexID', pokemon.names.pokemon[skitty.readNationalPokedexID()]);
console.log('%s: %s', 'HeldItem', pokemon.names.items[skitty.readHeldItem()]);
console.log('%s: %s', 'OTID', skitty.readOTID());
console.log('%s: %s', 'OTSecretID', skitty.readOTSecretID());
console.log('%s: %s', 'ExperiencePoints', skitty.readExperiencePoints());
console.log('%s: %s', 'Ability', skitty.readAbility());
console.log('%s: %s', 'AbilityNumber', skitty.readAbilityNumber());
console.log('%s: %s', 'PersonalityValue', skitty.readPersonalityValue());
console.log('%s: %s', 'Nature', skitty.readNature());
console.log('%s: %s', 'FatefulEncounter', skitty.readFatefulEncounter());
console.log('%s: %s', 'Gender', pokemon.names.gender[skitty.readGender()]);
console.log('%s: %s', 'Genderless', skitty.readGenderless());
console.log('%s: %s', 'Form', skitty.readForm());
console.log('%s: %s', 'HPEffortValue', skitty.readHPEffortValue());
console.log('%s: %s', 'AttackEffortValue', skitty.readAttackEffortValue());
console.log('%s: %s', 'DefenseEffortValue', skitty.readDefenseEffortValue());
console.log('%s: %s', 'SpeedEffortValue', skitty.readSpeedEffortValue());
console.log('%s: %s', 'SPAttackEffortValue', skitty.readSPAttackEffortValue());
console.log('%s: %s', 'SPDefenseEffortValue', skitty.readSPDefenseEffortValue());
console.log('%s: %s', 'Pokerus', skitty.readPokerus());
console.log('%s: %s', 'KalosRibbons', skitty.readKalosRibbons());
console.log('%s: %s', 'Nickname', skitty.readNickname());
console.log('%s: %s', 'Move1ID', pokemon.names.moves[skitty.readMove1ID()]);
console.log('%s: %s', 'Move2ID', pokemon.names.moves[skitty.readMove2ID()]);
console.log('%s: %s', 'Move3ID', pokemon.names.moves[skitty.readMove3ID()]);
console.log('%s: %s', 'Move4ID', pokemon.names.moves[skitty.readMove4ID()]);
console.log('%s: %s', 'Move1CurrentPP', skitty.readMove1CurrentPP());
console.log('%s: %s', 'Move2CurrentPP', skitty.readMove2CurrentPP());
console.log('%s: %s', 'Move3CurrentPP', skitty.readMove3CurrentPP());
console.log('%s: %s', 'Move4CurrentPP', skitty.readMove4CurrentPP());
console.log('%s: %s', 'MovePPUps', skitty.readMovePPUps());
console.log('%s: %s', 'Move1IDAtHatching', pokemon.names.moves[skitty.readMove1IDAtHatching()]);
console.log('%s: %s', 'Move2IDAtHatching', pokemon.names.moves[skitty.readMove2IDAtHatching()]);
console.log('%s: %s', 'Move3IDAtHatching', pokemon.names.moves[skitty.readMove3IDAtHatching()]);
console.log('%s: %s', 'Move4IDAtHatching', pokemon.names.moves[skitty.readMove4IDAtHatching()]);
console.log('%s: %s', 'Move4IDAtHatching', pokemon.names.moves[skitty.readMove4IDAtHatching()]);
console.log('%s: %s', 'IVHP', skitty.readIVHP());
console.log('%s: %s', 'IVAttack', skitty.readIVAttack());
console.log('%s: %s', 'IVDefense', skitty.readIVDefense());
console.log('%s: %s', 'IVSpeed', skitty.readIVSpeed());
console.log('%s: %s', 'IVSPAttack', skitty.readIVSPAttack());
console.log('%s: %s', 'IVSPDefense', skitty.readIVSPDefense());
console.log('%s: %s', 'IsEgg', skitty.readIsEgg());
console.log('%s: %s', 'IsNicknamed', skitty.readIsNicknamed());
console.log('%s: %s', 'OTNameTradedTo', skitty.readOTNameTradedTo());
console.log('%s: %s', 'OTName', skitty.readOTName());
console.log('%s: %s', 'YearEggReceived', skitty.readYearEggReceived());
console.log('%s: %s', 'MonthEggReceived', skitty.readMonthEggReceived());
console.log('%s: %s', 'DayEggReceived', skitty.readDayEggReceived());
console.log('%s: %s', 'YearMet', skitty.readYearMet());
console.log('%s: %s', 'MonthMet', skitty.readMonthMet());
console.log('%s: %s', 'DayMet', skitty.readDayMet());
console.log('%s: %s', 'EggLocation', skitty.readEggLocation());
console.log('%s: %s', 'MetAtLocation', skitty.readMetAtLocation());
console.log('%s: %s', 'Pokeball', pokemon.names.items[skitty.readPokeball()]);
console.log('%s: %s', 'EncounterLevel', skitty.readEncounterLevel());
console.log('%s: %s', 'OTGender', pokemon.names.gender[skitty.readOTGender()]);
console.log('%s: %s', 'OTGameVersion', pokemon.names.versions[skitty.readOTGameVersion()]);
console.log('%s: %s', 'CountryID', skitty.readCountryID());
console.log('%s: %s', 'RegionID', skitty.readRegionID());
console.log('%s: %s', '3DSregionID', skitty.read3DSregionID());
console.log('%s: %s', 'OTlanguage', pokemon.names.languages[skitty.readOTlanguage()]);
