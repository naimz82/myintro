let ops = ['+', '-', '*'];

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', function() {

    //Get DOM elements, represent with variables
    let ans = document.getElementById('ans1'),
        qs1 = document.getElementById('qs1'),
        qs2 = document.getElementById('qs2'),
        oper = document.getElementById('oper1'),
        btnSubmit = document.getElementById('btnSubmit');
    
    let op = ops[generateRandomNumber(0, ops.length - 1)],
        num1 = generateRandomNumber(0, 9);

    if(op === '-') {
        num2 = generateRandomNumber(0, num1);
    } else {
        num2 = generateRandomNumber(0, 9);
    }

    qs1.textContent = num1;
    qs2.textContent = num2;
    oper.textContent = op;

    ans.focus();

    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        let correctAnswer;

        switch(op) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
        }

        if (parseInt(ans.value) === correctAnswer) {
            Swal.fire({
                title: 'CORRECT!',
                html: ans.value + ' is <strong>correct</strong>!',
                icon: 'success',
            }).then(() => {
                window.location.reload();
            });
        } else {
            Swal.fire({
                title: 'WRONG!',
                html: 'The correct answer is <strong>' + correctAnswer + '</strong>.',
                icon: 'error',
            }).then(() => {
                window.location.reload();
            });
        }
    });

});

