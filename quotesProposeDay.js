const quotesDiv = document.querySelector(".quotes");
const fpNameEl = document.querySelector("#fpname");
const spNameEl = document.querySelector("#spname");

const proposeQuotes = [
  `Dear Madam Ji,
  Today, on this Proposal Day,
I don’t just ask for your hand—
I ask for your heart, your trust, and your companionship for a lifetime.

I promise to stand beside you in every season of life,
to respect you deeply,
to support you quietly,
and to love you sincerely—
in happiness, in challenges,
and in every dream that waits for us ahead.

From my heart, a few lines for you:

“Tum saath ho toh har raasta aasaan lagta hai,
Tumhari muskaan mein har jawaab mil jaata hai.
Zindagi ke safar mein sirf itna chahta hoon,
Tumhaara haath mere haath mein hamesha rahe.”

So today, with honesty and all my heart, I ask you—

Will you be my future wife, Madam Ji? 💍
Will you walk this beautiful journey of life with me—
today, tomorrow, and always?`
  
];
// `Our love story is my favorite. Will you make it official and be my forever?`,
//   `I'm not a genie, but I can make your dreams come true. Will you be my wish?`,
//   `Are you a camera? Every time I look at you, I smile. Will you be the reason for my happiness?`,
//   `Is your name Wi‑fi? Because I'm feeling a connection. Will you be my forever signal?`,
//   `Excuse me, but I think you dropped something: MY JAW. Will you pick it up and be my valentine?`,
//   `Do you have a map? Because I just got lost in your eyes, and now I need directions to your heart.`,
//   `I was blinded by your beauty; I'm going to need your name and number for insurance purposes.`,
//   `You're the answer to my prayers. Will you make my dreams come true by being mine?`,
//   `If kisses were snowflakes, I'd send you a blizzard. Will you be my snow queen?`

function typewriterPropose(text, textEl, speedMs, onComplete) {
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

// Single fullscreen quote with typewriter container (no link), same pattern as Rose Day.
if (quotesDiv && proposeQuotes.length > 0) {
  const para = document.createElement('p');
  para.classList.add('quote');
  const textSpan = document.createElement('span');
  textSpan.className = 'quote-typewriter-text';
  para.appendChild(textSpan);
  quotesDiv.appendChild(para);
}

window.startProposeQuoteTypewriter = function () {
  const quoteEl = quotesDiv && quotesDiv.querySelector('.quote');
  const textEl = quoteEl && quoteEl.querySelector('.quote-typewriter-text');
  if (!textEl || !proposeQuotes[0]) return;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  quoteEl.appendChild(cursor);
  typewriterPropose(proposeQuotes[0], textEl, 65, function () {
    if (cursor.parentNode) cursor.remove();
  });
};

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;

    if (typeof initExpressFeelings === 'function') {
      initExpressFeelings(quotesDiv, { subject: 'Propose Day - Express your feelings' });
    }
  })
  .catch(error => console.error('Error loading config:', error));

