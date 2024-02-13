function updateBackground() {
  var now = new Date();
  var hours = now.getHours();
  var background = document.getElementById('background');

  if(hours >= 6 && hours < 12) {
    background.style.backgroundImage = "url('morning.png')";
  } else if(hours >= 12 && hours < 20) {
    background.style.backgroundImage = "url('afternoon.png')";
  } else {
    background.style.backgroundImage = "url('night.png')";
  }
}

updateBackground();

setInterval(updateBackground, 60000);

  function updateTimeAndGreeting() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var greetingText = hours >= 6 && hours < 12 ? 'Good morning, it\'s currently' :
                         hours >= 12 && hours < 18 ? 'Good afternoon, it\'s currently' :
                         hours >= 18 && hours < 22 ? 'Good evening, it\'s currently' :
                         'Good night, it\'s currently';
  
      var timeString = hours.toString().padStart(2, '0') + ':' +
                       minutes.toString().padStart(2, '0') + ':' +
                       seconds.toString().padStart(2, '0');
  
      document.getElementById('time').textContent = timeString;
      document.getElementById('greeting').textContent = greetingText;
    }

updateBackground();
updateTimeAndGreeting();

setInterval(updateBackground, 60000);
setInterval(updateTimeAndGreeting, 1000); 


  function generateNewQuote() {
    var quotes = [
      {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra, "
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln, "
      },
      {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe, "
      },
      {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle"
      },
      {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
      },
    ];

    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
  
    document.getElementById('text').textContent = '"' + randomQuote.text + '"';
    document.getElementById('author').textContent = randomQuote.author;
}

document.getElementById('new-quote').addEventListener('click', generateNewQuote);
setInterval(updateBackground, 60000);
setInterval(updateTimeAndGreeting, 1000); 

window.onload = function() {
    updateBackground();
    updateTimeAndGreeting();
    generateNewQuote();
};