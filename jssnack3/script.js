// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let counter = 0;

let i = 0;

const visualElement = document.querySelector("h1");



// for (let i = 0; i < 10; i++) {

//     const thisNumber = Number (prompt("Inserisci un numero"));

//     counter += thisNumber;
// }

// console.log(counter);

// visualElement.innerHTML = `La somma dei numeri inseriti è: ${counter}`;

// Snack 3 blocco 1 con While:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


while (i < 10) {

    const thisNumber = Number (prompt("Inserisci un numero"));

    counter += thisNumber;

    i++
}

console.log(counter);

visualElement.innerHTML = `La somma dei numeri inseriti è: ${counter}`;