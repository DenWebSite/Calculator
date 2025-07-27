let a = ''; // first number
let b = ''; // second number
let sign = ''; // math operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const resultDisplay = document.querySelector('.calc-screen .result');
const expressionDisplay = document.querySelector('.calc-screen .expression');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    resultDisplay.textContent = '0';
    expressionDisplay.textContent = '';
};

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            resultDisplay.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            resultDisplay.textContent = b;
        } else {
            b += key;
            resultDisplay.textContent = b;
        }
        return;
    }

    if (action.includes(key)) {
        sign = key;
        resultDisplay.textContent = sign;
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        
        // Display the expression
        expressionDisplay.textContent = `${a} ${sign} ${b}`;
        
        // Calculate the result
        let calculationResult;
        switch (sign) {
            case '+':
                calculationResult = (+a) + (+b);
                break;
            case '-':
                calculationResult = a - b;
                break;
            case 'X':
                calculationResult = a * b;
                break;
            case '/':
                if (b === '0') {
                    resultDisplay.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    expressionDisplay.textContent = '';
                    return;
                }
                calculationResult = a / b;
                break;
            default:
                calculationResult = b || a;
        }

        a = calculationResult.toString();
        finish = true;
        resultDisplay.textContent = a;
    }
});

const plusMinus = document.querySelector('.plus-minus');
const percent = document.querySelector('.percent');

plusMinus.addEventListener('click', () => {
    Swal.fire({
        title: 'Упс',
        text: 'Как работает эта кнопка?',
        confirmButtonText: 'Продолжить',
        confirmButtonColor: 'var(--color-accent)',
        customClass: {
            popup: 'customClass'
        },
    });
})

percent.addEventListener('click', () => {
    Swal.fire({
        title: 'Ой',
        text: 'Странная кнопка',
        confirmButtonText: 'Продолжить',
        confirmButtonColor: 'var(--color-accent)',
        customClass: {
            popup: 'customClass'
        },
    });
})