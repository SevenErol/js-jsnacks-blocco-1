// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


const numberOne = prompt("Inserisci il primo numero");

const numberTwo = prompt ("Inserisci il secondo numero");

const visualElement = document.querySelector("h1");

if (numberOne > numberTwo) {

    console.log(numberOne);

    visualElement.innerHTML = `Il numero maggiore è ${numberOne}`;

} else if (numberOne < numberTwo) {

    console.log(numberTwo);

    visualElement.innerHTML = `Il numero maggiore è ${numberTwo}`;

}