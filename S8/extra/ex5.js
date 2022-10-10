/*
En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10'. Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 

La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.

Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso.

*/

const baseUrl = 'https://opentdb.com/api.php?type=multiple&amount=';
let questionsAnswered = [];
const gameBoard$$ = document.querySelector('[data-function="gameboard"]');
const input$$ = document.querySelector('[data-function="questions-number"]');

const startGame = () => {
    resetGame();

    fetch(baseUrl + input$$.value).then(res => res.json()).then(res => {
        createQuestions(res.results)
    })
}

const resetGame = () => {
    questionsAnswered = [];
    gameBoard$$.innerHTML = '';
}

const createQuestions = (questions) => {
    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];

        const h4$$ = document.createElement('h4');
        h4$$.textContent = question.question;

        gameBoard$$.appendChild(h4$$);
        const shuffleArray = shuffle([question.correct_answer, ...question.incorrect_answers]);
        createAnwsers(shuffleArray, question.correct_answer, index);
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const createAnwsers = (answers, correctAnswer, questionIndex) => {
    for (let index = 0; index < answers.length; index++) {
        const answer = answers[index];
        const p$$ = document.createElement('p');
        p$$.setAttribute("data-answer", questionIndex)
        p$$.classList.add("answer");

        p$$.textContent = answer;
        p$$.addEventListener('click', (e) => {
            markAnwser(e.target, questionIndex);
            checkAnswer(answer, correctAnswer, questionIndex)
        })
        gameBoard$$.appendChild(p$$);
    }
}

const markAnwser = (target, questionIndex) => {
    const allAnwsers = document.body.querySelectorAll("[data-answer='" + questionIndex + "'")
    for (const answer of allAnwsers) {
        answer.classList.remove("marked")
    }
    target.classList.add('marked');
}

const checkAnswer = (answer, correctAnswer, questionIndex) => {
    questionsAnswered[questionIndex] = answer === correctAnswer;
    console.log(questionsAnswered);
  
}

const checkGame = () => {
    const results = questionsAnswered.reduce((accumulator, questionAnswered) => {
        return { correctResult: questionAnswered ? accumulator.correctResult + 1 : accumulator.correctResult, incorrectResult: !questionAnswered ? accumulator.incorrectResult + 1 : accumulator.incorrectResult }
    }, { correctResult: 0, incorrectResult: 0 })

    const p$$ = document.createElement(`p`);
    p$$.textContent = `You have ${results.correctResult} correct answers and ${results.incorrectResult} incorrect answers.`
    gameBoard$$.appendChild(p$$);
}



const button$ = document.querySelector('[data-function="start-game"]');

button$.addEventListener('click', startGame);

const checkButton$ = document.querySelector('[data-function="check-game"]');

checkButton$.addEventListener('click', checkGame);