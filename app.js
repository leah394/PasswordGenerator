// Generator Functions

function getRandomUpper(){
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}
console.log(getRandomLower());

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[(Math.floor(Math.random() * symbols.length))];
}
console.log(getRandomSymbol());

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

function generatePassword(upper, lower, number, symbol, length){
    console.log(upper, lower, number, symbol, length);

    let generatePassword = ``;
    const typesCount = upper + lower + number + symbol;
    console.log(typesCount);
    if (typesCount === 0){
        return '';
    }

    let typesArr = [
        [`upper`, upper],
        [`lower`, lower],
        [`number`, number],
        [`symbol`, symbol]
    ];

    typesArr.filter(
        function (item){
            console.log(item[1]);
            return item[1];
        }
    );
    console.log(typesArr);

    for (i = 0; i < length; i += typesCount){
        typesArr.forEach(
            function (type){
                console.log(type);
                console.log(type[0]);
                const funcName = type[0];
                generatePassword +=  randomFunc[funcName]();
            }
        );
    }
    console.log(generatePassword);

    generatedPassword = generatePassword.slice(0,length);
    console.log(generatePassword);

    return generatePassword

}

generateEl.addEventListener('click', () => {
    const length = parseInt (lengthEl.value);
    console.log(typeof length);
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    console.log(hasUpper, hasLower, hasNumber, hasSymbol);

    resultEl.innerText = generatePassword(
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol,
        length
    );

});

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (password === ""){
        return;
    }

    textarea.value = password;

    const body = document.querySelector('body');
    body.prepend(textarea);

    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert(`Password has been copied to the clipboard!`);

});