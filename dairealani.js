const arguments = process.argv.slice(2);
const pi=3.14;
function alanHesapla(yaricap) {
  let rKare = yaricap * yaricap * 1;
  let alan = pi * rKare;
  console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
}
alanHesapla(arguments[0]);


