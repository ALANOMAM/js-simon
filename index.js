 /*
 consegna:
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
 
 */


let data1 = new Date();
let data2 = new Date("02/13/2024 9:30:00");
 
// calcolo la differenza di tempo tra due date indicative in millisecondi
let differenzaDiTempo =
    data2.getTime() - data1.getTime();
    console.log("differenza di tempo in millisecondi",differenzaDiTempo)
 
//dalla differenza di tempo trovato sopra in millisecondi, ricavo la DIFFERENZA DI ORE.
// il " % 24" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
let differenzaDiOre = Math.round(differenzaDiTempo / (1000 * 60 *60) % 24);
console.log("differenza di ore",differenzaDiOre)

//dalla differenza di tempo trovato sopra in millisecondi, ricavo la DIFFERENZA DI MINUTI.
// il " % 60" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
let differenzaDiMinuti = Math.round(differenzaDiTempo / (1000 * 60)% 60);
console.log("differenza di minuti",differenzaDiMinuti)

//dalla differenza di tempo trovato sopra in millisecondi, ricavo la DIFFERENZA DI SECONDI.
// il " % 60" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
let differenzaDiSecondi = Math.round(differenzaDiTempo / 1000 % 60) ;
console.log("differenza di secondi",differenzaDiSecondi)
 
// collegamento tra dom e js
let secondi = document.querySelector("#seconds")
let minuti = document.querySelector("#minutes")
let ore = document.querySelector("#hours")

 // esposizione delle ore,minuti e secondi nel dom
secondi.innerHTML = differenzaDiSecondi
minuti.innerHTML = differenzaDiMinuti
ore.innerHTML = differenzaDiOre

