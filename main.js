const diceBtn = document.querySelector("dice");
const adviceIDTxt = document.getElementById("advice-ID");
const adviceTxt = document.getElementById("advice-txt");
const divider = document.getElementById('divider');
const IPURL = "https://api.adviceslip.com/advice";

if (window.innerWidth < 750) {
    divider.src = 'images/pattern-divider-mobile.svg';
} else {
    divider.src = 'images/pattern-divider-desktop.svg';
}

async function getRandomAdvice() {
  try {
    const response = await fetch(IPURL);
    if (response.ok) {
      const data = await response.json();
      displayTheAdvice(data.slip.id, data.slip.advice);
    }
  } catch (err) {
    console.error(err);
  }
}

getRandomAdvice();

function displayTheAdvice(id, advice) {
  adviceIDTxt.textContent = id;
  adviceTxt.textContent = `"${advice}"`;
}
