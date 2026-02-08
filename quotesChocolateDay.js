const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const chocolateDayQuotes = [
  `Dear Madam Ji,

Today is Chocolate Day, and I know you don’t really like chocolate or sugar.
But as Ayurveda and doctors say, organic jaggery is good for health—pure, natural, and nourishing.
So maybe I won’t be chocolate in your life… I want to be jaggery instead.

And don’t worry at all—
since you don’t like chocolate, I will be the one who eats all your chocolates 😉,
just like I promise to take away all your worries in the future,
so your days stay lighter and your smile stays constant.

A few lines just for you:

“Aapki muskaan se har din meetha lagega,
Aap saath hongi toh har pal khaas lagega.
Chocolate ho ya na ho zindagi mein kabhi,
Aapka saath hi mere liye sabse meetha rahega.”

Happy Chocolate Day, Madam Ji 🍫
Today and always, my only wish is to add sweetness to your life.`
];

function typewriterChocolate(text, textEl, speedMs, onComplete) {
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
if (quotesDiv && chocolateDayQuotes.length > 0) {
  const para = document.createElement('p');
  para.classList.add('quote');
  const textSpan = document.createElement('span');
  textSpan.className = 'quote-typewriter-text';
  para.appendChild(textSpan);
  quotesDiv.appendChild(para);
}

window.startChocolateQuoteTypewriter = function () {
  const quoteEl = quotesDiv && quotesDiv.querySelector('.quote');
  const textEl = quoteEl && quoteEl.querySelector('.quote-typewriter-text');
  if (!textEl || !chocolateDayQuotes[0]) return;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  quoteEl.appendChild(cursor);
  typewriterChocolate(chocolateDayQuotes[0], textEl, 65, function () {
    if (cursor.parentNode) cursor.remove();
  });
};

// ,
//   `Just like chocolate melts in the mouth,
//   Your love melts my heart.
//   Wishing you a very Happy Chocolate Day!`,
//   `Life is like a box of chocolates,
//   And you are the sweetest one in it.
//   Happy Chocolate Day, sweetheart!`,
//   `चॉकलेट की तरह मीठी हो तुम,
//   चॉकलेट की तरह प्यारी हो तुम,
//   चॉकलेट डे पर यही दुआ है,
//   तुम हमेशा खुश रहो और मुस्कुराती रहो!
//   हैप्पी चॉकलेट डे!`,
//   `You are the chocolate to my milk,
//   The sweetness to my life.
//   Happy Chocolate Day, darling!`,
//   `चॉकलेट की तरह हो तुम्हारा प्यार,
//   जो दिल को कर दे मीठा और प्यारा।
//   हैप्पी चॉकलेट डे, मेरी जान!`,
//   `Just like chocolate makes everything better,
//   Your presence makes my life sweeter.
//   Happy Chocolate Day, my love!`,
//   `तुम्हारी मुस्कान चॉकलेट से भी मीठी है,
//   तुम्हारा प्यार चॉकलेट से भी प्यारा है।
//   हैप्पी चॉकलेट डे, मेरी जान!`,
//   `You are the reason my life is so sweet,
//   Just like chocolate, you make everything complete.
//   Happy Chocolate Day, sweetheart!`,
//   `चॉकलेट की तरह मीठा हो तुम्हारा साथ,
//   चॉकलेट की तरह प्यारा हो तुम्हारा हाथ।
//   हैप्पी चॉकलेट डे, मेरी जान!`,
//   `Just like chocolate, you are irresistible,
//   And your love is simply unforgettable.
//   Happy Chocolate Day, my love!`,
//   `तुम्हारी मोहब्बत चॉकलेट से भी मीठी है,
//   तुम्हारी याद चॉकलेट से भी प्यारी है।
//   हैप्पी चॉकलेट डे, मेरी जान!`,
//   `You are the chocolate in my life,
//   Making every moment sweet and rife.
//   Happy Chocolate Day, darling!`,
//   `चॉकलेट की तरह मीठा हो तुम्हारा प्यार,
//   चॉकलेट की तरह प्यारा हो तुम्हारा साथ।
//   हैप्पी चॉकलेट डे, मेरी जान!`,
//   `Just like chocolate, you are my favorite treat,
//   And your love makes my life complete.
//   Happy Chocolate Day, sweetheart!`

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
      initExpressFeelings(quotesDiv, { subject: 'Chocolate Day - Express your feelings' });
    }
  })
  .catch(error => console.error('Error loading config:', error));