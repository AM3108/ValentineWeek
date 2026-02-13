const quotesDiv = document.getElementById('valentine-quotes-area');
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const valentineDayQuotes = [
  `Dear Madam Ji,

I hope the journey from Rose Day to Valentine’s Day felt like a beautiful ride for you.
As this chapter comes to an end, I realize I have so many things to say—
but today, I will save some of them for the future,
because some feelings deserve time as well.

For me, this journey has been truly special.
It is something I loved doing—for someone who genuinely means a lot to me.
And doing all this has made me very happy.

But this is not an end—
it is just the beginning.
So please be ready, because there will always be little surprises waiting for you.

Today’s secret message is about 10th August 2025.
That day holds a very special place in my heart—
the day our families met,
and at the temple, our bond was accepted with the grace of Bhagwan Shri Krishna.
It was also the first time I surprised you,
when I said I wouldn’t come—but I did.

So yes… be ready again. 😊

A few lines from my heart:

“Safar chhota tha, par ehsaas gehre ho gaye,
Kuch pal chup rahe, par yaadein thehar si gayi.
Yeh ant nahi hai, bas ek naya aaghaz hai,
Kyunki kahaniyaan wahi sundar hoti hain—
jahan aage bhi kuch khaas ho baaki.”

Happy Valentine’s Day, Madam Ji 🌹🤍
If love is a journey, then every step with you already feels worth it.
And if this story has just begun,
I’m grateful for every page we are yet to write—together.`
];

function typewriterValentine(text, textEl, speedMs, onComplete) {
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

if (quotesDiv && valentineDayQuotes.length > 0) {
  const para = document.createElement('p');
  para.classList.add('quote');
  const textSpan = document.createElement('span');
  textSpan.className = 'quote-typewriter-text';
  para.appendChild(textSpan);
  quotesDiv.appendChild(para);
}

window.startValentineQuoteTypewriter = function () {
  const quoteEl = quotesDiv && quotesDiv.querySelector('.quote');
  const textEl = quoteEl && quoteEl.querySelector('.quote-typewriter-text');
  if (!textEl || !valentineDayQuotes[0]) return;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  quoteEl.appendChild(cursor);
  typewriterValentine(valentineDayQuotes[0], textEl, 65, function () {
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
      initExpressFeelings(quotesDiv, { subject: "Valentine's Day - Express your feelings" });
    }
  })
  .catch(error => console.error('Error loading config:', error));
