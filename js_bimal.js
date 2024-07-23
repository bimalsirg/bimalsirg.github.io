
    let attempts = {};

    function checkAnswer(questionNumber, correctAnswers) {
        const question = document.getElementById('question' + questionNumber);
        const checkboxes = question.querySelectorAll('input[type="checkbox"]');
        let selectedAnswers = [];
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedAnswers.push(index);
            }
        });
        selectedAnswers.sort();
        correctAnswers.sort();

        if (JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers)) {
            question.querySelector('.error').style.display = 'none';
            question.querySelector('.congrats').style.display = 'block';
        } else {
            if (!attempts[questionNumber]) {
                attempts[questionNumber] = 0;
            }
            attempts[questionNumber]++;
            if (attempts[questionNumber] >= 3) {
                question.querySelector('.show-answer').style.display = 'block';
            }
            question.querySelector('.error').style.display = 'block';
            question.querySelector('.congrats').style.display = 'none';
        }
    }

    function showCorrectAnswer(questionNumber, correctAnswers) {
        const question = document.getElementById('question' + questionNumber);
        const checkboxes = question.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            if (correctAnswers.includes(index)) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        });
        question.querySelector('.error').style.display = 'none';
        question.querySelector('.congrats').style.display = 'block';
    }

    function resetQuiz() {
        document.querySelectorAll('input[type="checkbox"]').forEach(input => {
            input.checked = false;
        });
        document.querySelectorAll('.error, .congrats, .show-answer').forEach(div => {
            div.style.display = 'none';
        });
        attempts = {};
    }

