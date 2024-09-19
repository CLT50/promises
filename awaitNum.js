let favoriteNum = 2;
let baseURL = "http://numbersapi.com";

// 1.
async function numFact1() {
  let data = await $.getJSON(`${baseURL}/${favoriteNum}?json`);
  console.log(data);
}
numFact1();

// 2.
const favoriteNums = [3, 5, 7];
async function numFact2() {
  let data = await $.getJSON(`${baseURL}/${favoriteNum}?json`);
  console.log(data);
}
numFact2();

// 3.
async function numFact3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNum}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
numFact3();