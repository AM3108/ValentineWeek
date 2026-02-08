const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const teddyDayQuotes = [
  `Dear Madam Ji,

Today is Teddy Day, and a teddy is known for giving comfort without saying much—
warm, calm, and always there when you need a hug.

I may not be a teddy you can hold in your hands,
but I promise to be the one who will always stand beside you—
to listen quietly,
to support you gently,
and to make you feel safe and cared for, always.

Whenever life feels heavy or tiring,
I hope you’ll feel my presence like a teddy—
simple, comforting, and full of warmth.

A few lines from my heart:

“Aap jab thak jaayengi, main sahara ban jaaunga,
Aap udaas hongi, toh muskaan ban jaaunga.
Teddy ho ya na ho paas mein kabhi,
Aapke liye main hamesha saath khada paaoge.”

Happy Teddy Day, Madam Ji 🧸
Today and in the future, may you always feel cared for—
just like a warm hug that never fades.`
];

function typewriterTeddy(text, textEl, speedMs, onComplete) {
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

if (quotesDiv && teddyDayQuotes.length > 0) {
  const para = document.createElement('p');
  para.classList.add('quote');
  const textSpan = document.createElement('span');
  textSpan.className = 'quote-typewriter-text';
  para.appendChild(textSpan);
  quotesDiv.appendChild(para);
}

window.startTeddyQuoteTypewriter = function () {
  const quoteEl = quotesDiv && quotesDiv.querySelector('.quote');
  const textEl = quoteEl && quoteEl.querySelector('.quote-typewriter-text');
  if (!textEl || !teddyDayQuotes[0]) return;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  quoteEl.appendChild(cursor);
  typewriterTeddy(teddyDayQuotes[0], textEl, 65, function () {
    if (cursor.parentNode) cursor.remove();
  });
};

// ,
//   `Just like a teddy bear, you are soft and warm,
// You bring comfort to my heart and calm every storm.
// Happy Teddy Day, my love!`,
//   `You are my teddy bear, my forever friend,
// With you, my happiness will never end.
// Happy Teddy Day, darling!`,
//   `तुम मेरे प्यारे टेडी बियर हो,
// तुम्हारे बिना मेरी दुनिया अधूरी है।
// हैप्पी टेडी डे, मेरी जान!`,
//   `Just like a teddy bear, you are my comfort zone,
// With you, I never feel alone.
// Happy Teddy Day, sweetheart!`,
//   `तुम मेरे लिए टेडी बियर की तरह हो,
// जो हर दुख को दूर कर देता है।
// हैप्पी टेडी डे, मेरी जान!`,
//   `You are my teddy bear, my partner in crime,
// With you, every moment feels so sublime.
// Happy Teddy Day, my love!`,
//   `तुम मेरे टेडी बियर हो,
// जो मेरे दिल को छू लेते हो।
// हैप्पी टेडी डे, मेरी जान!`,
//   `Just like a teddy bear, you are my safe place,
// With you, I find peace and grace.
// Happy Teddy Day, sweetheart!`,
//   `You are my teddy bear, my forever hug,
// With you, my heart feels snug.
// Happy Teddy Day, my love!`,
//   `Just like a teddy bear, you are my joy,
// With you, my life feels like a beautiful toy.
// Happy Teddy Day, sweetheart!`
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;

    if (typeof initExpressFeelings === 'function') {
      initExpressFeelings(quotesDiv, { subject: 'Teddy Day - Express your feelings' });
    }
  })
  .catch(error => console.error('Error loading config:', error));