const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
`Your thoughts are incredibly powerful. Choose yours wisely. -Joe Dispenza`,
`Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs`,
`If everything around you seems dark, look again, you may be the LIGHT. - Rumi`,
`Think of it this way: the input remains the same, so the output has to remain the same. How, then, can you ever create anything new? -Joe Dispenza`,
`The mind is like tofu. It tastes like whatever you marinate it in. - Sylvia Boorstein`,
`Have the courage to follow your heart and intuition. They somehow know what you truly want to become. - Steve Jobs`,
`Imagination and faith are the secrets of creation. -Neville Goddard`,
`Those who fail to learn from history are condemned to repeat it - Winston Churchill`,
`The truth is still the truth, even if no one believes it. A lie is still a lie, even if everyone believes it.`,
`A fit body, a calm mind, a house full of love. These things cannot be bought - they must be earned. - Naval Ravikant`,
`When you focus on you, you grow. When you focus on shit, shit grows. - Dwayne Johnson`,
`The great challenges of life appear to us when, and only when, we have everything we need to survive and heal from the experience. - Gregg Braden`,
`I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. - Bruce Lee`
]

button.addEventListener('click',()=>{
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = 'block';
    par.textContent = randomQuote;
})