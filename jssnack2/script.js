// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const firstString = prompt("Inserisci la prima frase");

const secondString = prompt("inserisci la seconda frase");

if ( firstString.length > secondString.length) {

    console.log(firstString);

} else if (firstString.length < secondString.length) {

    console.log(secondString);

} else if (firstString.length === secondString.length) {

    console.log("Le due frasi sono lunghe uguali");
    
}