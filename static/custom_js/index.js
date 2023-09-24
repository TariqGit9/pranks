var funny_quotes = [
    "Why waste time thinking outside the box when we can just live inside a circle?",
    "If a tree falls in the forest and no one hears it, does it still need a chiropractor?",
    "If procrastination were an Olympic sport, it'd probably start training... tomorrow.",
    "Why do today what we can put off until the day after tomorrow?",
    "Life is like a camera – focus on the pizza, not the calories.",
    "When in doubt, just keep scrolling. Eventually, you'll find something important... or a cat video.",
    "If we can't convince them, confuse them. Works every time... we think?",
    "When life gives you lemons, squirt someone in the eye and run away.",
    "Not lazy; conserving energy for a future crisis.",
    "If we can't make everyone happy, at least make ourselves a sandwich.",
    "Don't take life too seriously; it's not like we're going to get out of it alive.",
    "The secret to success? Buy low, sell high, and never trust a toaster.",
    "On a seafood diet. We see food, and we eat it.",
    "Toilet paper: because sometimes life just wants to throw crap at you.",
    "Have a 'to-do' list as long as our attention span.",
    "The more we weight, the harder we are to kidnap. Stay safe, eat cake.",
    "Life's too short to be serious all the time. Also, too long.",
    "When life gives you melons, you might be dyslexic.",
    "Used to be indecisive, but now we're not quite sure.",
    "If at first, we don't succeed, skydiving is not for us.",
    "Money can't buy happiness, but it can buy ice cream, which is pretty much the same thing.",
    "Why do they call it 'beauty sleep' when you wake up looking like a troll?",
    "Never trust an atom; they make up everything.",
    "Life is all about perspective. The sinking of the Titanic was a miracle for the lobsters in the ship's kitchen.",
    "The best way to avoid disappointment is to not get our hopes up – ever.",
    "Writing a book. Got the page numbers done; now just need to fill in the rest.",
    "If life gives you lemons, throw them back and demand chocolate.",
    "Not arguing; just explaining why we're right.",
    "Not clumsy. The floor just hates us, the table and chairs are bullies, and the walls get in our way.",
    "Do something every day that scares your cat.",
    "Don't worry about what people think. They don't do it very often.",
    "Not saying we're a superhero, but no one has ever seen us and Batman in the same room together.",
    "Life is like a roll of toilet paper; the closer it gets to the end, the faster it goes.",
    "Told my computer I needed a break, and now it won't stop throwing up pop-ups about vacations.",
      
  ]

  var information_array= [
  "Do you know kangaroos can jump higher than an average house because an average house can't jump?",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a bear with no teeth? A gummy bear!",
  "How do you organize a space party? You 'planet'!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Did you hear about the cheese factory that exploded? There was nothing left but de-brie!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised!",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What's orange and sounds like a parrot? A carrot!",
  "How do you make a tissue dance? You put a little boogie in it.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fish with no eyes? Fsh!",
  "What do you call a dog magician? A labracadabrador!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
  "I used to play piano by ear, but now I use my hands."
];

// You can access these jokes randomly like this:
const randomJoke = information_array[Math.floor(Math.random() * information_array.length)];
$('.info-text-data').text(randomJoke)



  console.log()
  function generateUniqueRandomNumbers(count, min, max) {
    if (count > max - min + 1) {
      throw new Error("Cannot generate that many unique random numbers in the given range.");
    }

    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNum);
    }

    return Array.from(uniqueNumbers);
  }

  const minNumber = 1;
  const maxNumber = funny_quotes.length -1;
  const numberOfRandomNumbers = 3;

  const randomNumbers = generateUniqueRandomNumbers(numberOfRandomNumbers, minNumber, maxNumber);
  console.log(randomNumbers);
  $('.quote-1').text(funny_quotes[randomNumbers[0]])
  $('.quote-2').text(funny_quotes[randomNumbers[1]])
  $('.quote-3').text(funny_quotes[randomNumbers[2]])


