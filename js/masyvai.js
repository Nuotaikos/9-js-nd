//1.Sukurti masyą, kurio ilgis 20, o reikšmės –skaičiai, nuo 1 iki 20.
console.log("1.----------------");
const masyvas2 = [];

for (let i = 1; i <= 20; i++) {
  masyvas2.push(i);
}
console.log(masyvas2);

//2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
console.log("2.----------------");
let atsitiktiniIlgis = [];

for (let i = 0; i <= 60; i++) {
  atsitiktiniIlgis.push(Math.floor(Math.random() * 60) + 1);
}
console.log(atsitiktiniIlgis);

//3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("3.----------------");
let masyvas1 = [];
let max1 = 4;
for (let i = 0; i < rand(5, 47); i++) {
  masyvas1.push(rand(10, 15));
}
console.log(masyvas1);
for (let i = 0; i < masyvas1.length; i++) {
  if (masyvas1[i] > max1) {
    max1 = masyvas1[i];
  }
}
console.log("max: " + max1);
// 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H.
console.log("4.----------------");
const raides = ["D", "E", "F", "G", "H"];
const masyvas3 = [];

for (let i = 0; i < 100; i++) {
  masyvas3.push(raides[rand(0, 4)]);
}

console.log(masyvas3);

let countD = 0;
let countE = 0;
let countF = 0;
let countG = 0;
let countH = 0;

for (let i = 0; i < masyvas3.length; i++) {
  if (masyvas3[i] === "D") {
    countD++;
  }
  if (masyvas3[i] === "E") {
    countE++;
  }
  if (masyvas3[i] === "F") {
    countF++;
  }
  if (masyvas3[i] === "G") {
    countG++;
  }
  if (masyvas3[i] === "H") {
    countH++;
  }
}

console.log(
  `Raidžių masyve yra: D: ${countD}, E: ${countE}, F: ${countF}, G: ${countG}, H: ${countH}`
);

//5.  Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia
console.log("5.----------be pabaigos, reikia paskaiciuot kuriu daugiausia---");
const raides2 = ["M", "N", "O", "P"];
const masyvas4 = [];

for (let i = 0; i < 100; i++) {
  masyvas4.push(raides2[rand(0,3)]);
}

console.log(masyvas4);

let countM = 0;
let countN = 0;
let countO = 0;
let countP = 0;

for (let i = 0; i < masyvas4.length; i++) {
  if (masyvas4[i] === "M") {
    countM++;
  }
  if (masyvas4[i] === "N") {
    countN++;
  }
  if (masyvas4[i] === "O") {
    countO++;
  }
  if (masyvas4[i] === "P") {
    countP++;
  }
}

console.log(masyvas4);
console.log(`Masyve yra M: ${countM}, N: ${countN}, O: ${countO}, P: ${countP}`);


//6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti
console.log("6.----------------");
const masyvas5 = [];
for (let i = 0; i < 20; i++) {
    masyvas5.push(rand(10, 50));
}
console.log(masyvas5);

let unikalios = 0;
for (let i = 0; i < unikalios-1; i++) {
    if (masyvas5.ChartAt(i) !== masyvas5.ChartAt(i+1))
    unikalios++;
}