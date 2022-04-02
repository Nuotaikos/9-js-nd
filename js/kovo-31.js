/*
3. Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const a = 3;
const b = 9;
console.log("--------------------");
if (a > b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
if (a < b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
console.log("--------------------");
if (a === b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
if (a !== b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
console.log("--------------------");
if (a >= b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
if (a <= b) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite kitą kartą.");
}
/*
2. Išvesti teksto tipo kintamųjų ilgius
*/
const darzoves = ["rope", "zirnis"];
console.log(darzoves);

const di = darzoves[0].length;
console.log(
  "Darzoves " + darzoves[0] + " teksto ilgis yra " + di + " simboliai"
);
const da = darzoves[1].length;
console.log(
  "Darzoves " + darzoves[1] + " teksto ilgis yra " + da + " simboliai"
);

/*
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

if ("rope" > "zirnis") {
  console.log("Rope yra didesnis");
} else {
  console.log("Zirnis yra didesnis");
}
if ("rope" < "zirnis") {
  console.log("Rope yra mazesnis");
} else {
  console.log("Zirnis yra mazesnis");
}
if ("rope" === "zirnis") {
  console.log("Rope ir zirnis yra lygus");
} else if ("rope" !== "zirnis") {
  console.log("Zirnis ir rope nera lygus");
}
if ("rope" >= "zirnis") {
  console.log("Rope mazesne. Rope ir zirnis nera lygus");
} else if ("rope" <= "zirnis") {
  console.log("Zirnis didesnis. Rope ir zirnis nera lygus");
}

/*
4. Išvesti sąrašo tipo kintamųjų ilgius
*/
console.log('kintamieji4-----------');
const aa = "zuvis";
const bb = "mesa";

const aaIlgis = aa.length;
console.log("Zodi " + aa + " sudaro " + aaIlgis + " simboliai");
const bbIlgis = bb.length;
console.log("Zodi " + bb + " sudaro " + bbIlgis + " simboliai");

/*
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const pm = [1, 4, 6, 4];
console.log("Pirmas Masyvas", pm);
const am = [7, 7, 7, 7];
console.log("Antras Masyvas", am);

const log = pm[0] + pm[1] + pm[2] + pm[3];
console.log(log);
const mmm = am[0] + am[1] + am[2] + am[3];
console.log(mmm);
if ("log" > "mmm") {
  console.log("Pirmas masyvas yra didesnis");
} else {
  console.log("Antras masyvas yra didesnis");
}
if ("log" < "mmm") {
  console.log("Pirmas masyvas yra mazesnis");
} else {
  console.log("Antras masyvas yra mazesnis");
}
if ("log" === "mmm") {
  console.log("Pirmas masyvas ir Antras masyvas yra lygus");
} else if ("log" !== "mmm") {
  console.log("Antras masyvas ir Pirmas masyvas nera lygus");
}
if ("log" >= "mmm") {
  console.log(
    "Pirmas masyvas mazesnis. Pirmas masyvas ir Antras masyvas nera lygus"
  );
} else if ("log" <= "mmm") {
  console.log(
    "Antras masyvas didesnis. Pirmas masyvas ir Antras masyvas nera lygus"
  );
}

/*Ciklo for panaudojimas
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a)	0 … 0
b)	0 … 4
c)	0 … 100
d)	574 … 815
e)	-50 … 50
f)	-70 … 30
*/
let suma = 0;

for (let i = 0; i <= 0; i++) {
  console.log(i + i++);
}

for (let i = 0; i <= 4; i++) {
  console.log(i);
  suma += i++;
}

//CIKLAI
console.log("------------------------------------");
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//1. Labas 5 kartus
for (let i = 0; i <= 4; i++) {
  console.log("Labas");
}
console.log("------------------------------------");
//2. atspausdinti skaičius 0 1 2 3 4
for (let i = 0; i <= 4; i++) {
  console.log(i);
}
//3. atspausdinti skaičius 0 10 20 30 40
for (let i = 0; i <= 40; i++) {
  if (i % 10 == 0) console.log(i);
}
//4.atspausdinti skaičius 49 50 51 52 53
for (let i = 49; i <= 53; i++) {
  console.log(i);
}
// 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
for (let i = 0; i < 5; i++) {
  console.log(rand(0, 10));
}
//6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.
for (let i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
}
//7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
let skai = 5;
for (let i = 1; i <= 10; i++) {
  console.log(i * skai);
}
//8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.
let n = 15;
for (let i = 1; i <= n; i++) {
  console.log(i * 2.54);
}
//9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
let palukanos = 2;
let indelis = 100;
for (let i = 1; i <= n; i++) {
  let palukanuDydis = Math.round(indelis * palukanos) / 100;
  indelis += palukanuDydis;
  console.log(
    "Po " +
      i +
      " metu indelio dydids bus " +
      indelis +
      ", o tu metu palukanu norma " +
      palukanuDydis
  );
}
//10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.

console.log('Nesigauna ----------------');
/*let kelemieji = 366;
let paprastieji = 365;
for (let i = 0; i <= i; i++) {
    if ((0 == kelemieji % 4)  {
        console.log(kelemieji + ' yra kelemieji metai');
    } else {
        console.log(paprastieji + ' yra paprastieji metai');
    }
}
}
*/


/*FUNKCIJOS
//1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
*/
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
//2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.

console.log("2.------------");
function palygink(num1, num2) {
  if (num1 > num2) {
    return num1 + " yra didesnis uz " + num2;
  } else if (num1 < num2) {
    return num1 + " yra mazesnis uz " + num2;
  } else {
    return num1 + " yra lygus " + num2;
  }
}
const rezultatas = palygink(10, 20);
console.log(rezultatas);

//3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
console.log("3.-----NEGERAI");
function arKelemiejiMetai(year) {
  if (year / 4) {
    return year + " yra keliamieji metai";
  } else {
    return year + " nera keliamieji metai";
  }
}
const year = arKelemiejiMetai(2001);
console.log(year);

//4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
console.log("4.-----------");
function kvadratas(k) {
  return k / (1 / k);
}
console.log(kvadratas(16));

//5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
console.log("5.-----------");
function skaiciuSuma(n) {
  if (n == 1) return 1;
  return n + skaiciuSuma(n - 1);
}
console.log(skaiciuSuma(6));

//6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).
console.log("6.------NEPADARYTA");

//7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).
console.log("7.-------------");

function zodzioIlgis(name) {
  return `Zodis "${name}" sudarytas is ${name.length} raidziu.`;
}
const gelesPavadinimas = zodzioIlgis("Raskila");
console.log(gelesPavadinimas);
//8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".
console.log("8.-------------");

function telefonoNumeris(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
const nr = telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(nr);

//9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra ilgesnis.
console.log("9.------NESIGAUNA-");

function kintamieji(a, b) {
  for (let i = 0; i <= kintamieji.length; i++) {
    if (a[i] !== b[i]);
    {
      return `Tekstas ${zodziai} ilgesnis`;
    }
  }
}
const zodziai = palygink(["varna", "peleda"]);
console.log(zodziai);
//return `${kintamieji} zodis yra ilgesnis`;
//10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių
console.log("10.-------------");
function SuskaiciuokRaide(stringas, raide) {
  let raide_suma = 0;
  for (let position = 0; position < stringas.length; position++) {
    if (stringas.charAt(position) == raide) {
      raide_suma += 1;
    }
  }
  return raide_suma;
}

const zodis = SuskaiciuokRaide("nebeprisikiškiakopūsteliaujantiesiems", "i");
console.log(zodis);

