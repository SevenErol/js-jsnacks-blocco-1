// Snack 4 Blocco 1:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome
// e comunicagli se può partecipare o no alla festa. 

const guestList = [
    "Fabio",
    "Mario",
    "Marco",
    "Caterina",
    "Lorenzo"
];

let i = 0;

let counter = 0;

const visualElement = document.querySelector("h1");

const userName = prompt ("Come ti chiami?");

while ( i < guestList.length) {

    if (guestList[i] === userName) {

        visualElement.innerHTML = "Benvenuto alla festa"

    } else if (counter === guestList.length) {

        visualElement.innerHTML = "accesso negato"
    }

    i++
    counter++
}