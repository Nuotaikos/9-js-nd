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
console.log('--------------------');
if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.log('--------------------');
if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.log('--------------------');
if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/*
2. Išvesti teksto tipo kintamųjų ilgius
*/
const darzoves = ['rope', 'zirnis'];
console.log(darzoves);

const di = darzoves[0].length;
console.log('Darzoves ' + darzoves[0] + ' teksto ilgis yra ' + di+ ' simboliai');
const da = darzoves[1].length;
console.log('Darzoves ' + darzoves[1] + ' teksto ilgis yra ' + da + ' simboliai');

/*
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

if ('rope' > 'zirnis') {
    console.log ('Rope yra didesnis');
} else {
    console.log('Zirnis yra didesnis');
}
if ('rope' < 'zirnis') {
    console.log ('Rope yra mazesnis');
} else {
    console.log('Zirnis yra mazesnis');
}
if ('rope' === 'zirnis') {
    console.log ('Rope ir zirnis yra lygus');
} else if ('rope' !== 'zirnis' ) {
    console.log('Zirnis ir rope nera lygus');
}  
if ('rope' >= 'zirnis') {
    console.log ('Rope mazesne. Rope ir zirnis nera lygus');
} else if ('rope' <= 'zirnis' ) {
    console.log('Zirnis didesnis. Rope ir zirnis nera lygus');
}  

/*
4. Išvesti sąrašo tipo kintamųjų ilgius
*/
const aa = 'zuvis';
const bb = 'mesa';

const aaIlgis = aa.length;
console.log('Zodi ' +  aa  + ' sudaro ' + aaIlgis +  ' simboliai');
const bbIlgis = bb.length;
console.log('Zodi ' +  bb  + ' sudaro ' + bbIlgis +  ' simboliai');

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
console.log('Pirmas Masyvas', pm);
const am = [7, 7, 7, 7,]
console.log('Antras Masyvas', am);

const log = pm[0] + pm[1] + pm[2] + pm[3];
console.log(log);
const mmm = am[0] + am[1] + am[2] + am[3];
console.log(mmm);
if ('log' > 'mmm') {
    console.log ('Pirmas masyvas yra didesnis');
} else {
    console.log('Antras masyvas yra didesnis');
}
if ('log' < 'mmm') {
    console.log ('Pirmas masyvas yra mazesnis');
} else {
    console.log('Antras masyvas yra mazesnis');
}
if ('log' === 'mmm') {
    console.log ('Pirmas masyvas ir Antras masyvas yra lygus');
} else if ('log' !== 'mmm' ) {
    console.log('Antras masyvas ir Pirmas masyvas nera lygus');
}  
if ('log' >= 'mmm') {
    console.log ('Pirmas masyvas mazesnis. Pirmas masyvas ir Antras masyvas nera lygus');
} else if ('log' <= 'mmm' ) {
    console.log('Antras masyvas didesnis. Pirmas masyvas ir Antras masyvas nera lygus');
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

for (let i=0; i<=0; i++) {
    console.log(i+i++);
}

for (let i=0; i<=4; i++) {
    console.log(i);
    suma += i++;
}


/* 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: pvz.: “abcdef” -> “fedcba”
const reiksmes = [a, b, c, d, e, f, ];

for (let i=0; i < reiksmes.length; i++) {
    const reiksme = reiksmes[i];
    suma += reiksme;
}
/*3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a)	0 - 11
b)	8 - 31
c)	-18 - 18
d)	rezultatą pateikti tokiu formatu:
•	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
•	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
•	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/


/*
1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).
3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).
4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).
5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.
7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.
9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.
function rand(min, max) {
Return Math.floor(Math.random()*(max-min+1)+min);
*/

//1. nepadaryta su Labas
console.log('------------------------------------');
//2. atspausdinti skaičius 0 1 2 3 4
for (let i=0; i<=4; i++) {
    console.log(i);
}
//3. atspausdinti skaičius 0 10 20 30 40
for (let i=0; i<=40; i++) {
    if (i%10 ==0)
    console.log(i);
}
//4.atspausdinti skaičius 49 50 51 52 53
for (let i=49; i<=53; i++) {
    console.log(i);
}
// 4.atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10
for (let i=0; i<Math.floor(Math.random() *  10); i++) {
    console.log(i);
}



