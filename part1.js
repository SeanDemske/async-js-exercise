// 1
$.getJSON("http://numbersapi.com/random/year?json").then(resp => {
    console.log(resp);
})

// 2
$.getJSON("http://numbersapi.com/1..3,10?json").then(resp => {
    console.log(resp);
})

// 3
Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON("http://numbersapi.com/10?json");
    }))
    .then(resp => {
        resp.forEach(data => $("body").append(`<p>${data.text}</p>`));
    });