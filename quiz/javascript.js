const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option');
const submitAnswerButton = document.getElementById('submit-answer');
const message = document.getElementById('message');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte'],
        correctAnswer: 2,
        points: 10
    },
    {
        question: 'O que é relevo?',
        options: ['Ciclos biogeoquimico', 'Tipo de vegetação', 'Conjunto de formas presentes na superfície terrestre.', 'Um animal'],
        correctAnswer: 2,
        points: 10
    }, 
    {
        question: 'O _________ é um dos principais problemas ambientais no Brasil que acontece desde a chegada dos portugueses em 1500.',
        options: [' Assoreamento', 'Efeito estufa', 'Desmatamento', 'Uso de agrotóxicos'],
        correctAnswer: 2,
        points: 10
    }, 
    {
        question: 'As ilhas de calor representam um dos problemas ambientais urbanos. Esse fenômeno climático acontece devido:',
        options: ['Ao aumento das queimadas nas zonas rurais', 'Ao aumento da inversão térmica nas cidades.', 'A elevação das temperaturas em algumas zonas urbanas', 'Aos microclimas periféricos que afetam diretamente as cidades.'],
        correctAnswer: 2,
        points: 10
    },
    {
        question: 'A poluição radioativa é considerada um dos piores tipos de poluição, pois:',
        options: ['Provoca o desmatamento da cobertura vegetal.', 'Acelera o processo de desertificação do planeta.', 'Libera gases e elementos tóxicos na atmosfera.', 'Aquece os mares e os oceanos provocando a extinção de espécies.'],
        correctAnswer: 2,
        points: 10
    }, // Adicione as outras perguntas aqui...// Adicione as outras perguntas aqui...
];

let currentQuestionIndex = 0;
let chances = 2;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score += currentQuestion.points;
        scoreElement.textContent = `Pontuação: ${score}`;
        message.textContent = 'Resposta correta!';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            questionText.textContent = 'Parabéns, você completou o quiz!';
            options.forEach(option => option.style.display = 'none');
            submitAnswerButton.style.display = 'none';
        }
    } else {
        chances--;

        if (chances === 0) {
            questionText.textContent = 'Você errou todas as chances. Recomece o quiz.';
            options.forEach(option => option.style.display = 'none');
            submitAnswerButton.style.display = 'none';
        } else {
            message.textContent = 'Resposta incorreta. Tente novamente.';
        }
    }
}

displayQuestion();

submitAnswerButton.addEventListener('click', () => {
    const selectedOptionIndex = Array.from(options).findIndex(option => option.classList.contains('selected'));
    if (selectedOptionIndex !== -1) {
        checkAnswer(selectedOptionIndex);
    } else {
        message.textContent = 'Selecione uma opção antes de responder.';
    }
});

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        options.forEach(option => option.classList.remove('selected'));
        option.classList.add('selected');
    });
});