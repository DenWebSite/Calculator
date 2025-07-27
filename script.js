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



let a = ''; // first number
let b = ''; // second number
let sign = ''; // math operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; // first number
    b = ''; // second number
    sign = ''; // math operation
    finish = false;
    out.textContent = 0;

    console.log('you clear all');
};

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return; // нажата не кнопка
    if (event.target.classList.contains('ac')) return; // нажата кнопка ac

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;

        return;
    }

    if (key === '=') {
        if (b === '') {
            b = a;
        }

        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sigh = '';
                    return;
                }

                a = a / b;
                break;
        }

        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
})
