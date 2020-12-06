const URL = "https://deckofcardsapi.com/api/deck";

// // 1
// $.getJSON(`${URL}/new/draw/?count=1`).then((resp) => {
//     let {suit, value} = resp.cards[0];
//     console.log(suit, value);
// })

// // 2
// let firstCard;
// $.getJSON(`${URL}/new/draw/`).then((resp) => {
//     firstCard = resp.cards[0];
//     let deckId = resp.deck_id;
//     return $.getJSON(`${URL}/${deckId}/draw/`);
// })
// .then(resp => {
//     let secondCard = resp.cards[0];
//     [firstCard, secondCard].forEach(card => {
//         console.log(`${card.value.toLowerCase()}`, `${card.suit.toLowerCase()}`);
//     });
// });

// 3

let deckId;
const $cardBtn = $("#newcard-btn");

$.getJSON(`${URL}/new/shuffle`).then((resp) => {
    deckId = resp.deck_id;
    console.log(resp);
})

$cardBtn.click(function() {
    $.getJSON(`${URL}/${deckId}/draw`).then((resp) => {
        if (resp.remaining > 0) {
            createCard(resp.cards[0].image)
        } else {
            $cardBtn.prop('disabled', true);
        }
    })
});

function createCard(image) {
    // Creates and appends img element to the content container

    let randNum = (Math.floor(Math.random() * 25) || Math.floor(Math.random() * 25) * -1)
    $(".content-container").append(`
        <img src="${image}" alt="" class="card"
        style="transform: rotate(${randNum}deg);">
    `);
}


