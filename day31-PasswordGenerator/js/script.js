(function (){
    const result = document.getElementById('result');
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const genPassword = document.getElementById('password');
    const clipboard = document.getElementById('clipboard');

    const getRandomFunc = {
        upper: getRandomUpper,
        lower: getRandomLower,
        number: getRandomNumber,
        symbol: getRandomSymbol
    }

    clipboard.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = result.innerText;

        if( !password ) return;

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard!')
    });

    genPassword.addEventListener('click', () => {
        const lengths = +length.value;
        const hasUpper = uppercase.checked;
        const hasLower = lowercase.checked;
        const hasNumber = numbers.checked;
        const hasSymbol = symbols.checked;

        result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengths)
    });

    function generatePassword(lower, upper, number, symbol, length) {
        let generatedPassword = '';
        const typesCount = lower + upper + number + symbol;
        const typeArray = [ { lower }, { upper }, { number }, { symbol } ].filter( item => Object.values( item )[0]);

        if( typesCount === 0 ) return ''

        for( let i = 0; i < length; i += typesCount ) {
            typeArray.forEach( type => {
                const funcName = Object.keys( type )[0];
                generatedPassword += getRandomFunc[ funcName ]()
            })
        }

        const finalPassword = generatedPassword.slice(0, length);

        return finalPassword; 
    }

    function getRandomLower() {
        return String.fromCharCode( Math.floor( Math.random() * 26 ) + 97 )
    }

    function getRandomUpper() {
        return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 )
    }

    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10 ) +48 );
    }

    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[ Math.floor( Math.random() * symbols.length )]
    }
})()