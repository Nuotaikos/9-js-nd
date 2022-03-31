/*
2.3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
*/
const balai = [5, 9, 10, 2, 5];
console.log('Balai', balai);
let baluSuma = balai[0] - balai[1] + balai[2] - balai[3] + balai[4];
console.log(baluSuma);


/*
2.4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

const mokiniai = ['Rasa', 'Ieva', 'Inga', 'Olia', 'Ia'];
console.log('Mokiniai:', mokiniai);

const geles = ['Jurginas', 'Bijūnas','Rūta', 'Ramunė', 'Rožė'];
console.log('Geles:', geles);

const zydejimoMenesis = ['balandis','gegužė', 'birželis','liepa', 'rugpjūtis']; 
console.log('Zydejimo menesis:', zydejimoMenesis);

const sarasuVertes = zydejimoMenesis[4] + ", " + zydejimoMenesis[3] + ", " + zydejimoMenesis[2] + " , " +zydejimoMenesis[1] + " , " + zydejimoMenesis[0] + " , " + geles[4] + " , " + geles[3] + " , " + geles[2] + " , " + geles[1] + " , " + geles[0]  + " , " + zydejimoMenesis[4]  + ", " + zydejimoMenesis[3]  + " , " + zydejimoMenesis[2]  + " , " + zydejimoMenesis[1]  + " , " + zydejimoMenesis[0];
console.log(sarasuVertes);

/*1.Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas –„Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
*/
let n = 20;

if (n > 0) {
    console.log('Skaicius geras');
}

if (n < 0) {
    console.log('Skaicius blogas');
}

/*
4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.
*/

let a = 15;
let b = 9;
console.log('A= '+ a + ', B= ' + b);
if (a > b) {
   a--;
   b++;
} else if (a < b) {
   a++;
   b--; 
}
console.log('A= '+ a + ', B= ' + b);

/*
2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-
geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
*/

n = 3;
if (n === 1) {
    console.log('Eikite');
} else if (n === 2) {
    console.log('Palaukite');
} else if (n === 3) {
    console.log('Sustokite');
}

/*
Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: 
Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.
*/
let dezes = 2;
let knygos = 12;
let talpa = 5;
if (knygos <= dezes * talpa) {
    console.log('Knygos tilps i dezes');
} else {
    console.log('Knygos netilps');
}
/*
Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.
*/

let centai = 50;
let porcijosKaina = 30;
console.log('Uz ' + centai + ' centu Saulius gales nusipirkti ' + Math.floor(centai / porcijosKaina) + ' porcijas ir jam liks ' + (centai % porcijosKaina ) + ' centu');

/*
Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.
*/

let degtukai = 4;
if (degtukai % 3 === 0) {
    console.log('Galima sudeti trikampi');
} else {
    console.log('Trikampio sudeti negalima');
}

/*
Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
*/

let menesis = 12;
if (menesis === 1 || menesis === 3 || menesis === 5 || menesis === 7 || menesis === 8 || menesis === 10 || menesis === 12) {
    console.log('Menuo turi 31 diena');
} else if (menesis === 2) {
    console.log('Menuo turi 28 diena');
} else {
    console.log("Menuo turi 30 dienu");
}
/*Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba
„Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.
*/
let skaicius = 4;
if (skaicius === 1 || skaicius === 3 || skaicius === 5) {
    console.log('Kambarį tvarkys jaunėlis.');
} else if (skaicius === 2 || skaicius === 4 || skaicius === 6) {
    console.log('Kambarį tvarkys vyresnėlis.');
}

/*
9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių 
žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. 
Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.
*/

/* 
10. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: 
jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos
*/
