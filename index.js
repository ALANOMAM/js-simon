 /*
 consegna:
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
 
 */



let dataFinale = new Date("19 Feb, 2024 9:30:00");


// collegamento tra dom e js
let secondi = document.querySelector("#seconds")
let minuti = document.querySelector("#minutes")
let ore = document.querySelector("#hours")
 
   //setInterval(conto,1000)
   conto()

function conto() {

    let dataAttuale = new Date();


// calcolo la differenza di tempo tra due date indicative in millisecondi
let differenzaDiTempo =
    dataFinale.getTime() - dataAttuale.getTime();
    console.log("differenza di tempo in millisecondi",differenzaDiTempo)
 
//dalla differenza di tempo trovato sopra in millisecondi, ricavo la DIFFERENZA DI ORE.
// il " % 24" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
let differenzaDiOre = Math.floor(differenzaDiTempo / (1000 * 60 *60) % 24);
console.log("differenza di ore",differenzaDiOre)

//dalla differenza di tempo trovato sopra in millisecondi, ricavo la DIFFERENZA DI MINUTI.
// il " % 60" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
let differenzaDiMinuti = Math.floor(differenzaDiTempo / (1000 * 60)% 60);
console.log("differenza di minuti",differenzaDiMinuti)

//dalla differenza di tempo trovato sopra in millisecondi, ricavo la DIFFERENZA DI SECONDI.
// il " % 60" fa si che ogni 24 unità ritorna a zero e ricomincia il conto
let differenzaDiSecondi = Math.floor(differenzaDiTempo / 1000 % 60) ;
 console.log("differenza di secondi",differenzaDiSecondi)
 


 // esposizione delle ore,minuti e secondi nel dom
secondi.innerText = differenzaDiSecondi
minuti.innerText = differenzaDiMinuti
ore.innerText = differenzaDiOre

}

