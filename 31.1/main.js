const btn = document.querySelector('#picker');
const colorDiv = document.querySelector('#colorBox');
const colorDescrption = document.querySelector('#inner');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function getRandomHexCode() {
    const hexCharacters = '0123456789abcdef';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hexCharacters[random(15)];
        
    }
    return hexCode;
}
btn.addEventListener('click', () => {
    let rndHex = getRandomHexCode();
    colorDiv.style.backgroundColor = rndHex;
    colorDescrption.textContent = rndHex+'|'+`rgb(${parseInt(rndHex[1]+rndHex[2],16)},
                                                  ${parseInt(rndHex[3]+rndHex[4],16)},
                                                  ${parseInt(rndHex[5]+rndHex[6],16)})` ;
});