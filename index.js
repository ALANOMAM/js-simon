 /*
 consegna:
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
 
 */


let data1 = new Date();
let data2 = new Date("02/12/2024 9:30:00");
 
// calcolo la differenza di tempo tra due date indicative
let differenzaDiTempo =
    data2.getTime() - data1.getTime();
    console.log("differenza di tempo in millisecondi",differenzaDiTempo)
 
//dalla differenza di tempo trovato sopra, ricavo la DIFFERENZA DI GIORNI.
let differenzaDiGiorni = Math.round(differenzaDiTempo / (1000 * 3600 * 24));
console.log("differenza di tempo in giorni",differenzaDiGiorni)

//dalla differenza di tempo trovato sopra, ricavo la DIFFERENZA DI ORE.
let differenzaDiOre = Math.round(differenzaDiTempo / (1000 * 3600));
console.log("differenza di ore",differenzaDiOre)

//dalla differenza di tempo trovato sopra, ricavo la DIFFERENZA DI MINUTI.
let differenzaDiMinuti = Math.round(differenzaDiTempo / (1000 * 60));
console.log("differenza di minuti",differenzaDiMinuti)

//dalla differenza di tempo trovato sopra, ricavo la DIFFERENZA DI SECONDI.
let differenzaDiSecondi = Math.round(differenzaDiTempo / (1000)) ;
console.log("differenza di secondi",differenzaDiSecondi)
 

let secondi = document.querySelector("#seconds")
let minuti = document.querySelector("#minutes")
let ore = document.querySelector("#hours")

   //qui dico che i contenuti dei secondi si aggiorna ogni secondo in dom
 setInterval(secondiMancanti,1000)

 //qui dico che i contenuti dei minuti si aggiorna ogni minuto in dom
 setInterval(minutiMancanti,60000)

 //qui dico che i contenuti delle ore si aggiorna ogni ora in dom
 setInterval(oreMancanti,36000000)


 // funzioni che inseriscono in dom il conto alla rovescio del mio tempo.
function secondiMancanti(){
secondi.innerHTML = differenzaDiSecondi--
}
 
function minutiMancanti(){
    minuti.innerHTML = differenzaDiMinuti--
}

function oreMancanti(){
    ore.innerHTML = differenzaDiOre--
}