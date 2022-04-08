/*
console.log('pvz1---------------------');
let i = 0;
let n = 20;
while (i <= n) {
    console.log(i);
    i += 5;
}

console.log('pvz2---------------------');
let ii = 0;
while (ii < 10) {
    console.log(ii);
    ii = ii+2;
}
*/
/*
console.log('pvz3 sustoti kai i yra 5---------');
for (i = 0, i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}
*/

//1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.
console.log("1.---------------------");
let skaicius1 = 0;

while (skaicius1 < 100) {
  let atsitiktiniskaicius = Math.floor(Math.random() * 10 + 1);
  console.log(skaicius1);
  skaicius1 = skaicius1 + atsitiktiniskaicius;
  console.log(atsitiktiniskaicius);
}
console.log(skaicius1);

//2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7.
console.log("2.---------------------");
let skaicius = 0;
while (skaicius % 7 || skaicius === 0) {
  skaicius = Math.floor(Math.random() * 10 + 1);
}
console.log(skaicius);

/* 3. Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.
Kontroliniai duomenys:
Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).
Įveskite knygos skyrių skaičių: 17
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų)
*/
console.log("3.---------------------");
let mSkyrius = 17;
let dDienos = 0;
let sVidutiniskai = 0;

while (mSkyrius > sVidutiniskai) {
    dDienos++;
    sVidutiniskai += dDienos;
}
console.log(`Tadas visą knygą perskaitė per ${dDienos} dienų.`);
let vidutiniskai = mSkyrius / dDienos;
console.log(`Tadas vidutiniškai per dieną perskaitė ${vidutiniskai} skyrių.`);
//4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.
console.log("4.--------Blogai------");
/*
let i = 0;
while (i !== 5) {
    i = Math.floor((Math.round() * 10) + 1);
    console.log(i);
}
*?