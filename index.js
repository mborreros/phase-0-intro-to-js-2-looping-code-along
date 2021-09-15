// Code your solutions in this file
// const names = ["Ada", "Brendan", "Ali"];
// const events = "birthday";
// const thankYouCards = [];

// function writeCards (names, events) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
//     }
// };

// writeCards (names, events);

// thankYouCards[writeCards];

// return thankYouCards;

function countDown (i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return i;
};

countDown(10);