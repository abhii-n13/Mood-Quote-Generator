const moodSelector = document.getElementById("moodSelector");
const quoteGenerator = document.getElementById("quoteGenerator");
const quote = document.getElementById("quote");
const mood = document.getElementById("mood");
const quotesContainer = document.getElementsByClassName("quotesContainer")[0];

const quotes = {
  happy: [
    "Happiness is not out there, it's inside you.",
    "Smile, not because life is perfect, but because you choose to enjoy the ride.",
    "Joy is the simplest form of gratitude.",
    "Today is a good day to be happy for no reason.",
    "Let your happiness be contagious.",
  ],
  sad: [
    "Tears are words the heart can't express.",
    "It's okay to not be okay all the time.",
    "Even the darkest night will end and the sun will rise.",
    "Sadness flies away on the wings of time.",
    "Crying is not a sign of weakness; it's a sign of being human.",
  ],
  stressed: [
    "Take a deep breath—this moment will pass.",
    "You are doing better than you think.",
    "Don't let stress steal your peace.",
    "Pause. Breathe. Reset.",
    "Your calm mind is the ultimate weapon against your challenges.",
  ],
   motivational: [
        "Believe you can and you’re halfway there. — Theodore Roosevelt",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
        "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
        "You are capable of amazing things.",
        "Push yourself, because no one else is going to do it for you.",
  ],
};

quoteGenerator.addEventListener("click", () => {
  const currentMood = moodSelector.value;
  if (!currentMood) {
    alert("kindly select a mood");
    return;
  }

  const currentMoodQuote = quotes[currentMood];
  const randomQuote =
    currentMoodQuote[Math.floor(Math.random() * currentMoodQuote.length)];

  quote.textContent = randomQuote;
  mood.textContent = "mood - " + currentMood;
  quotesContainer.classList.remove("quotesContainerHidden");
});
