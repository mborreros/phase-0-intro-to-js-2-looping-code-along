// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const events = "surprise";
const thankYouCards = [];
let messages;

function writeCards (names, events) {
    for (let i = 0; i < names.length; i++) {
        thankYouCards[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        console.log(messages);
    }
    return thankYouCards;
};

function countDown (i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return i;
};

countDown(10);