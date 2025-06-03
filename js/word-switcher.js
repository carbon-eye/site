let dynamicWord = document.querySelector('#dynamic-word')

const words = ['sua plantação', 'seu parque', 'sua floresta'];

let currentIndex = 0;

function switchWord(){
    currentIndex = (currentIndex + 1) % words.length;
    dynamicWord.textContent = words[currentIndex];
}

setInterval(switchWord, 2000);
