const quotesDiv = document.getElementById('promise-quotes-area');
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const promiseDayQuotes = [
  `Dear Madam Ji,

Today is Promise Day, and I want to make promises that are simple, honest, and filled with love.

I promise to buy you the jhumkas you adore,
the sarees and dresses that make you smile,
the shoes you carefully choose,
and every little thing that you love.
I promise to happily wait while you choose the perfect bangles, jhumkas, shoes, dresses, or sarees,
because seeing you wear them with happiness will always be worth the time—
not just as gifts, but as reminders of how special you are to me.

I promise to notice your matte-colored lipstick,
to wait patiently while you get ready,
and to admire you quietly every single time.

I promise a jhula in the room,
and a wardrobe so big that even if I gave you the entire room,
you would still smile and say, “Thoda aur kam hai.” 😉
I promise a home with interiors chosen by you,
because “meri ghar ki lakshmi aap ho.”

I promise to love bhindi, baingan, and all those vegetables I don’t like—
just because you do.

I promise to protect your neend,
to bring you black coffee when silence feels better than words,
and to smile at the soft sound of your bangles.

I promise to always respect your decisions and choices,
and to never force you to do anything you don't want to do,
always take care of your health and happiness.

A promise in a few lines:

“Aap jo chaahengi, woh main laaunga,
Aapki pasand ko apni aadat banaaunga.
Jhumke ho, saree ho ya chhoti si khushi,
Aapki muskaan ke liye sab kuch nibhaaunga.”

These are not promises just for today—
they are promises for every tomorrow.

And one promise above all:
in happiness or sadness, in anger or silence, in strength or weakness—
when you feel alone, when the whole world stands against you,
I promise I will still stand beside you.
Whether you are right or wrong,
I will be there. Always.
Becasue that what my Bhole baba and my Maa Aadishakti has taught me,
Always be there for your other half.

Happy Promise Day, Madam Ji 🤍`
];

function typewriterPromise(text, textEl, speedMs, onComplete) {
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

if (quotesDiv && promiseDayQuotes.length > 0) {
  const para = document.createElement('p');
  para.classList.add('quote');
  const textSpan = document.createElement('span');
  textSpan.className = 'quote-typewriter-text';
  para.appendChild(textSpan);
  quotesDiv.appendChild(para);
}

window.startPromiseQuoteTypewriter = function () {
  const quoteEl = quotesDiv && quotesDiv.querySelector('.quote');
  const textEl = quoteEl && quoteEl.querySelector('.quote-typewriter-text');
  if (!textEl || !promiseDayQuotes[0]) return;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  quoteEl.appendChild(cursor);
  typewriterPromise(promiseDayQuotes[0], textEl, 65, function () {
    if (cursor.parentNode) cursor.remove();
  });
};

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
      initExpressFeelings(quotesDiv, { subject: 'Promise Day - Express your feelings' });
    }
  })
  .catch(error => console.error('Error loading config:', error));