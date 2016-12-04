var quotes = ["The best preparation for tomorrow is doing your best today.",
"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", "Keep your face always toward the sunshine - and shadows will fall behind you.", "We must let go of the life we have planned, so as to accept the one that is waiting for us.", "Nothing is impossible, the word itself says 'I'm possible'!", "Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.", "Happiness is not something you postpone for the future; it is something you design for the present.", "What we think, we become."],
authors = ["H. Jackson Brown, Jr.", "Swami Sivananda", "Helen Keller", "Steve Jobs", "Walt Whitman", "Joseph Campbell", "Audrey Hepburn", "Kevyn Aucoin", "Jim Rohn", "Buddha"];

var randomNumber = Math.floor(Math.random() * 10);
$("#quote").text(quotes[randomNumber]);
$("#author").text("-" + authors[randomNumber]);


$("button").click(function() {
  randomNumber = Math.floor(Math.random() * 10);
  console.log(quotes[randomNumber]);
  console.log("-" + authors[randomNumber]);

  $("#quote").text(quotes[randomNumber]);
  $("#author").text(authors[randomNumber]);
});

$("#tweet-quote").click(function() {
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $("#quote").text() + '" ' + $("#author").text()));
})
