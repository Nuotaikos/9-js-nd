/*Ciklo for panaudojimas
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a)	0 … 0
b)	0 … 4
c)	0 … 100
d)	574 … 815
e)	-50 … 50
f)	-70 … 30
*/
console.log("Ciklo for panaudojimas--------------------------");

function sumaIntervale(nuo, iki) {
  let suma = 0;
  for (let i = nuo; i <= iki; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumaIntervale(0, 0), "-->", 0);
console.log(sumaIntervale(0, 4), "-->", 10);
console.log(sumaIntervale(0, 100), "-->", 5050);
console.log(sumaIntervale(574, 815), "-->", 168069);
console.log(sumaIntervale(-50, 50), "-->", 0);
console.log(sumaIntervale(-70, 30), "-->", -2020);




