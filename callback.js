let favoriteNum = 2;
let numURL = "http://numbersapi.com";

// 1.
$.getJSON(`${numURL}/${favoriteNum}?json`, data=> {
  console.log(data);
});

// 2.
let favoriteNums = [7, 15, 30];
$.getJSON(`${numURL}/${favoriteNums}?json`, data=> {
  console.log(data);
});

// 3.
let facts = [];
$.getJSON(`${numURL}/${favoriteNum}?json`, data=> {
  facts.push(data.text);
  $.getJSON(`${numURL}/${favoriteNum}?json`, data=> {
    facts.push(data.text);
    $.getJSON(`${numURL}/${favoriteNumb}?json`, data=> {
      facts.push(data.text);
      $.getJSON(`${numURL}/${favoriteNum}?json`, data=> {
        facts.push(data.text);
        facts.forEach(fact => {
          $("div").append(`${fact}`);
        });
      });
    });
  });
});
