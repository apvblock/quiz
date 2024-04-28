const questionContainer = document.getElementById('question')
const optionsContainer = document.getElementById('options')

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Rome", "London", "Paris", "Berlin"],
        answer: "Paris",
    },
    {
        question: "What is 9+10?",
        options: ["21", "12", "15", "19"],
        answer: "19",
    },
    {
        question: "What year did Malaysia acheive indepence?",
        options: ["1963", "1809", "1945", "1957"],
        answer: "1957"
    },
    {
        question: "What is the only country that borders the United Kingdom?",
        options: ["Kazakhstan", "Ireland", "Croatia", "Bolivia"],
        answer: "Ireland"
    },
    {
        question: "Who is the first minister of Russia?",
        options: ["Борис Ельцин (Boris Yeltsin)", "Владимир Путин (Vladimir Putin)", "Иосиф Сталин (Joseph Stalin)"],
        answer: "Борис Ельцин (Boris Yeltsin)",
    },
    {
        question: "Who is the first minister of Germany?",
        options: ["Otto Von Bismarck", "Hermann Müller", "Adolf Hitler"],
        answer: "Otto Von Bismarck"
    },
    {
        question: "Who is the first minister of Slovakia?",
        options: ["Milan Čič", "Štefan Sádovský", "Ivan Knotek"],
        answer: "Štefan Sádovský"
    },
    {
        question: "Who is the first minister of Japan?",
        options: ["Kuroda Kiyotaka", "Yamagata Aritomo", "Isoroku Yamamoto", "Itō Hirobumi"],
        answer: "Itō Hirobumi",
    },
    {
        question:"What's the longest river called?",
        options: ["The Nile", "The Amazon", "The Ganges", "Jordan River"],
        answer: "The Nile"
    },
    {
        question: "Which house was Harry Potter always sorted into?",
        options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        answer: "Slytherin",
    },
];

let currentQuestionIndex = 0;
let score = 0

const displayQuestion = () => {
    const currentQuestion = quizData[currentQuestionIndex]
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button')
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => checkAnswer(option))
        optionsContainer.appendChild(optionButton)

    })
};

const checkAnswer = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex]
    if (selectedOption === currentQuestion.answer) {
        score++
    }
    currentQuestionIndex++
    if (currentQuestionIndex < quizData.length) {
        displayQuestion()
    } else {
        endQuiz()
    }
}

const endQuiz = () => {
    questionContainer.textContent = `Quiz completed! Your score: ${score}/${quizData.length}`
    optionsContainer.innerHTML = ''
}

displayQuestion();