
  
var lazyResponses = [
    "I am too tired to do that. We will do it later.",
    "Not in the mood for that right now. We will do it later.",
    "Do I have to? Fine, We will do it later.",
    "Can't I just take a nap instead? We will do it later.",
    "I'd rather watch paint dry. We will do it later.",
    "I have a strong case of procrastination. We will do it later.",
    "My laziness level is over 9000. We will do it later.",
    "I'm on a break right now. We will do it later.",
    "It's too much effort. We will do it later.",
    "I'd rather be doing nothing. We will do it later.",
    "I'm in my 'relax and do nothing' mode. We will do it later.",
    "Maybe tomorrow. We will do it later.",
    "I'm practicing the art of laziness. We will do it later.",
    "I'm just conserving energy. We will do it later.",
    "I'm on a quest for maximum relaxation. We will do it later.",
    "Laziness is my superpower. We will do it later.",
    "I'm taking a mental break. We will do it later.",
    "I'm doing the 'avoiding work' dance. We will do it later.",
    "I'm in a 'do nothing' state of mind. We will do it later.",
    "I'm in a 'procrastination nation' mood. We will do it later.",
    "I'd rather be anywhere but here. We will do it later.",
    "I'm embracing my inner sloth. We will do it later.",
    "I'm a professional procrastinator. We will do it later.",
    "I'm on a mission to delay everything. We will do it later.",
    "I'm too busy being unproductive. We will do it later.",
    "I'm perfecting my art of idleness. We will do it later.",
    "I'm letting time pass by. We will do it later.",
    "I'm living in the 'why do today what you can do tomorrow' zone. We will do it later."
];

// To get a random response


// Eventlistner for uploading file 
$(document).on('click', '.ask-question', function() {
var randomResponse = lazyResponses[Math.floor(Math.random() * lazyResponses.length)];

alert(randomResponse)
});