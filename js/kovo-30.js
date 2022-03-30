/*
2.3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
*/
const balai = [5, 9, 10, 2, 5];
console.log('Balai', balai);




/*
2.4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

const mokiniai = ['Rasa', 'Ieva', 'Inga', 'Olia', 'Ia'];
console.log('Mokiniai:', mokiniai);

const geles = ['Jurginas', 'Bijūnas','Rūta', 'Ramunė', 'Rožė'];
console.log('Geles:', geles);

const zydejimoMenesis = ['balandis','gegužė', 'birželis','liepa', 'rugpjūtis']; 
console.log('Zydejimo menesis:', zydejimoMenesis);

const sarasuVertes = zydejimoMenesis[4] + " , " + zydejimoMenesis[3] + " , " + zydejimoMenesis[2] + " , " +zydejimoMenesis[1] + " , " + zydejimoMenesis[0] + " , " + geles[4] + " , " + geles[3] + " , " + geles[2] + " , " + geles[1] + " , " + geles[0]  + " , " + zydejimoMenesis[4]  + " , " + zydejimoMenesis[3]  + " , " + zydejimoMenesis[2]  + " , " + zydejimoMenesis[1]  + " , " + zydejimoMenesis[0];
console.log(sarasuVertes);

/*1.Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas –„Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
*/
const n = 20;
const d = -20;
if (n > d) {
    console.log('Skaicius geras');
} else {
    console.log('Skaicius blogas');
}

/*
4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.
*/

let a = 5;
console.log('Padidintas 1:', ++a);

let b = 9;
console.log('Sumazintas 1:', --b);
