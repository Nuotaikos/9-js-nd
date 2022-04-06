/*
Radio
Reikalavimai:
veikia tik įjungus;
radijos gamybos metu yra suteikiamas jos pavadinimas;
galima įjungti ir išjungti;
galima keisti garsumą;
garsumo diapazonas yra nuo 0 iki 100 imtinai;
garsumas keičiamas tik sveikųjų skaičių vertėmis (ne priskiriant naują, o didinant arba mažinant esamą);
pasiekus minimalią reikšmę ir toliau bandant mažinti garsumą - jis nekinta;
pasiekus maksimalią reikšmę ir toliau bandant didinti garsumą - jis nekinta;
galima keisti pasirinktą radijo bangų dažnį;
radijo bangų dažniai yra intervale nuo-iki ir juos nurodome radijos gamybos metu;
jei gamybos metu radijo bangų dažnių diapazonas nėra nurodomas, tai pagal nutylėjimą jis yra 70-150;
absoliutus maksimalus galimas diapazonas yra leidžiamas 30-200 (net gamybos metu negalima peržengti šių ribų);
konkrečių radijo stočių pavadinimai ir jų bangų dažniai yra žinomi iš anksto (constructor: this.stations);
įjungus radiją iš karto parašoma, kokia stotis groja (jei groja), o jei ne - parašoma, jog šnypščia;
galima pakeisti pasirinktą dažnį tiesiog nurodant norimą reikšmę;
dažniai gali būti su vienu skaičiumi po kablelio;
keičiant radijo stotis (sėkmingai) yra skaičiuojamas toks kiekis;
galima gauti, kiek kartų buvo sėkmingai pakeistos radijo stotys;
*/

class Radio {
    constructor (name, diapazonas, stations) {
        this.name = name;
        this.turnedOn = false;
        this.dazniai = diapazonas;
        this.stations = stations;
    }
    
    switchOn () {
        this.turnedOn = true;
        console.log(`${this.name} radias ijungtas`);
    }
    switchOff () {
        this.turnedOn = false;
        console.log(`${this.name} radias isjungtas`);
    }
    sound (volume) {
        if (!this.turnedOn) {
            console.log(this.name, 'Panasu, kad nera elektros...');
            return;
        }
        if (i = 0, volume >= 50, i++); {
            console.log(this.name, 'Garseja');
            
        }
        if (volume <= 51 || volume >= 100); {
            console.log(this.name, 'Tildosi');
        }
        
    }
}


const M1 = new Radio('Sony');
console.log(M1.name);
M1.switchOn();
M1.switchOff();
M1.sound(2)

