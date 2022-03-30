/*
KINTAMIEJI

Iniciavimo budas:
const - default iniciavimo budas
let - antrinis budas inicijuoti, kai zinome, jog reiksme tures keistis
var - pats seniausias ir geriau niekada nenaudoti, jei rupi saugumas

Duomenu tipas: 
- number (skaicius) 
- string (tekstas) ""
- boolean (logine reiksme: true | false)
- array (masyvas, sarasas, matrica*) []
*/
/* 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
*/ 
const pirmas = 5;
console.log(pirmas);

let antras = 8;
console.log(antras);
antras = 9;
console.log(antras);
antras = 12;
console.log(antras);

var trecias = 10;
console.log(trecias);
/*
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
*/
const vardas = "Hortenzija";
console.log(vardas);

let pavadinimas = "Dobilas";
console.log(pavadinimas);

pavadinimas = 'Raskila'
console.log(pavadinimas);

pavadinimas = 'Roze'
console.log(pavadinimas);

var gele = 'Raudona roze'
console.log(gele);

const kategorija = 'Vienmeciai'
console.log('Kategorija:', kategorija);
/*
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
*/
const balai = [5, 9, 10, 2, 5];
console.log('Balai', balai);

const kiekiai = [45, 65, 23, 11, 35];
console.log('Kiekiai', kiekiai);

const svoriai = [100, 300, 200, 500, 343];
console.log('Svoriai', svoriai);
/*
4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
*/
const mokiniai = ['Rasa', 'Ieva', 'Inga', 'Olia', 'Ia'];
console.log('Mokiniai:', mokiniai);

const geles = ['Jurginas', 'Bijūnas','Rūta', 'Ramunė', 'Rožė'];
console.log('Geles:', geles);

const zydejimoMenesis = ['balandis','gegužė', 'birželis','liepa', 'rugpjūtis']; 
console.log('Zydejimo menesis:', zydejimoMenesis);
/*
2.1. Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
*/
const kintamujuSuma = balai[0] + balai[1] + balai[2] + balai[3] + balai[4] + kiekiai[0] + kiekiai[1] + kiekiai[2] + kiekiai[3] + kiekiai[4] + svoriai[0] +svoriai[1] + svoriai[2] +svoriai[3] +svoriai[4];
console.log(kintamujuSuma);
/*
2.2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
*/
const tekstoKintamieji = mokiniai[0] + " " + mokiniai[1] + " " +mokiniai[2] + " " +mokiniai[3] + " " +mokiniai[4] + " " + geles[0]  + " " + geles[1]  + " " + geles[2]  + " " + geles[3]  + " " + geles[4]  + " " +  zydejimoMenesis[0] + " " + zydejimoMenesis[1] + " " + zydejimoMenesis[2] + " " + zydejimoMenesis[3] + " " + zydejimoMenesis[4];
console.log(tekstoKintamieji);