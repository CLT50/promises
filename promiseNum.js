let favoriteNum = 2;
let numURL = "http://numbersapi.com";

// 1.
$.getJSON(`${numURL}/${favoriteNum}?json`).then(data => {
  console.log(data);
});

// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${numURL}/${favoriteNums}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${numURL}/${favoriteNum}?json`);
  })
).then(facts => {
  facts.forEach(data => $("div").append(`${data.text}`));
});