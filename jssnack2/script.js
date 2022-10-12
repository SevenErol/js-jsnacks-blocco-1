// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const firstString = prompt("Inserisci la prima frase");

const secondString = prompt("inserisci la seconda frase");

const visualElement = document.querySelector("h1");

if ( firstString.length > secondString.length) {

    console.log(firstString);

    visualElement.innerHTML = `la frase più lunga è: ${firstString}`;

} else if (firstString.length < secondString.length) {

    console.log(secondString);

    visualElement.innerHTML = `la frase più lunga è: ${secondString}`;

} else if (firstString.length === secondString.length) {

    console.log("Le due frasi sono lunghe uguali");

    visualElement.innerHTML = "Le due frasi sono lunghe uguali";

}