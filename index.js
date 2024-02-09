 /*
 consegna:
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
 
 */
/*
 let d1 = new Date()
 console.log(d1)
 console.log( "hours",d1.getHours())
 console.log( "minutes",d1.getMinutes())
 console.log( "seconds",d1.getSeconds())
 console.log("milliseconds",d1.getMilliseconds())

 let d2 = new Date("2024-02-12")
console.log(d2)
console.log(d2.setHours(9))
console.log(d2.getHours())
console.log(d2.setMinutes(30))
console.log(d2.getMinutes())
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
 

 