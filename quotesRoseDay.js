const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
    `Dear Madam Ji,

On 2nd August 2025, I was not prepared for that day at all.
For me, it felt like a usual day—meeting a family member and then going about my work.
But that day turned out to be something far more special.

It felt like the blessing of Maa Parvati when you came into my life—
like water to a plant growing in the desert.
You were simply yourself, without caring about what others might say.

That was the day I realized I had finally found the missing pieces of my life—
pieces I didn’t even know I was searching for.

Happy Rose Day, Madam Ji 🌹
You made that ordinary day unforgettable.`
];

// `Roses know the language of love,
//     What we cannot speak, roses say.
//     Take this rose as a gesture of my love,
//     Wishing you a Happy Rose Day!`,
//     `This Rose Day, I pray to God that the thorns on your life's path be vanished and it is filled with the beautiful petals of love, blessings and friendship. Happy Rose Day, sweetheart!`,
//     `When I looked at the red roses and you, I found that you are the most beautiful creation of God. Happy Rose Day, my girlfriend!`,
//     `People are lucky who are blessed with true love in their life... I am one of them. Happy Rose Day, darling!`,
//     `बड़े ही नाजुक से पली हो तुम,
//     इसलिए तोह गुलाब की कली हो तुम
//     जिसे मिलने की बेकरारी सताए,
//     दिल में आने वाली खलबली हो तुम!!! रोज डे मुबारक हो`,
//     `There is no feeling for soothing and comforting than having the love of your life beside you.
//     I love you, sweetie. Happy Rose Day!`,
//     `Roses are timeless just like my love for you, sweetheart. Happy Rose Day, my GF!`,
//     `फूल खिलते रहे आपकी ज़िन्दगी की राहो में,
//     हंसी चमकती रहे आपकी निगाहों में
//     कदम कदम पर मिले खुशियाँ आपको,
//     दिल देता हैं यही दुआ बार बार आपको!`,
//     `Out of all the unique ways of expressing love, I choose a romantic bunch of red roses for you that speak of my deep love for you…With all the warm hugs and kisses, wishing you a vivacious Rose Day, love.`,
//     `You entered into my life with a fragrance of joy, You are just like a beautiful rose. Happy Rose Day!`,
//     `Sending you this beautiful bouquet of red roses to express my love to you that is deep like an ocean and vast as a sky. Happy Rose Day!`,
//     `Of all the attractive flowers on this planet, a rose is undoubtedly the most beautiful one. And, so are you, my girlfriend! Happy Rose Day!`
// Fetch configuration from config.json to set names.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
  })
  .catch(error => console.error('Error loading config:', error));

const quotesNr = roseDay.length;

function typewriter(text, textEl, speedMs, onComplete) {
  textEl.textContent = '';
  let index = 0;
  function tick() {
    if (index < text.length) {
      textEl.textContent += text[index];
      index++;
      setTimeout(tick, speedMs);
    } else {
      if (onComplete) onComplete();
    }
  }
  tick();
}

for (let i = 0; i < quotesNr; i++) {
  const para = document.createElement("p");
  para.classList.add("quote");
  const textSpan = document.createElement("span");
  textSpan.className = "quote-typewriter-text";
  para.appendChild(textSpan);
  quotesDiv.appendChild(para);
}

window.startRoseQuoteTypewriter = function () {
  const quoteEl = quotesDiv.querySelector('.quote');
  const textEl = quoteEl && quoteEl.querySelector('.quote-typewriter-text');
  if (!textEl || !roseDay[0]) return;
  var cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  quoteEl.appendChild(cursor);
  typewriter(roseDay[0], textEl, 65, function () {
    if (cursor.parentNode) cursor.remove();
  });
};

if (typeof initExpressFeelings === 'function') {
  initExpressFeelings(quotesDiv, { subject: 'Rose Day - Express your feelings' });
}

