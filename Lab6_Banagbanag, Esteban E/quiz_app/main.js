// script.js
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Mode Language", "Happy Texting My Love"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which programming language is known for its use in web development and building dynamic websites?",
        options: ["Java", "Python", "C#", "JavaScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the purpose of CSS in web development?",
        options: ["Controlling Snake Species", "Creating Super Styles", "Cascading Style Sheets", "Computer Science System"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "Linux Foundation"],
        correctAnswer: "Microsoft"
    },
    {
        question: "What is the main function of a database management system (DBMS)?",
        options: ["Playing Music", "Managing Data", "Sending Emails", "Creating Graphics"],
        correctAnswer: "Managing Data"
    },
    {
        question: "In programming, what does API stand for?",
        options: ["Advanced Programming Interface", "Application Program Interface", "Automated Processing Instructions", "Advanced Python Integration"],
        correctAnswer: "Application Program Interface"
    },
    {
        question: "What is the purpose of the command 'git clone' in Git?",
        options: ["Creating a new repository", "Cloning a repository from a URL", "Creating a branch", "Merging branches"],
        correctAnswer: "Cloning a repository from a URL"
    },
    {
        question: "Which programming language is commonly used for data analysis and machine learning?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: "Python"
    },
    {
        question: "What does DNS stand for in the context of networking?",
        options: ["Digital Network Service", "Domain Name System", "Data Node Structure", "Dynamic Naming Scheme"],
        correctAnswer: "Domain Name System"
    },
    {
        question: "What is the purpose of the 'sudo' command in Unix/Linux?",
        options: ["Superuser Do", "Substitute User Directory Operation", "Secure Update and Delete Operations", "System Utility Data Output"],
        correctAnswer: "Superuser Do"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    const currentQ = questions[currentQuestion];

    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < currentQ.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = currentQ.options[i];
        optionButton.addEventListener("click", function() {
            checkAnswer(this.textContent);
        });
        optionsElement.appendChild(optionButton);
    }

    feedbackElement.textContent = "";
}

function checkAnswer(selectedOption) {
    const currentQ = questions[currentQuestion];

    if (selectedOption === currentQ.correctAnswer) {
        score++;
        displayFeedback("Correct!", "green");
    } else {
        displayFeedback(`Incorrect! Correct answer is ${currentQ.correctAnswer}`, "red");
    }

    // Highlight the correct answer in green
    const optionsElement = document.getElementById("options");
    for (const optionButton of optionsElement.children) {
        if (optionButton.textContent === currentQ.correctAnswer) {
            optionButton.style.backgroundColor = "green";
        } else {
            optionButton.style.backgroundColor = "red";
        }
        // Disable clicking on options after an answer is selected
        optionButton.disabled = true;
    }

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            resetOptions();
            displayQuestion();
        } else {
            displayFeedback(`Quiz completed. Your score: ${score}/${questions.length}`, "blue");
            displayButtons();
        }
    }, 1500);
}

function displayFeedback(message, color) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = message;
    feedbackElement.style.color = color;
}

function resetOptions() {
    const optionsElement = document.getElementById("options");
    for (const optionButton of optionsElement.children) {
        optionButton.style.backgroundColor = "#3498db"; // Reset background color
        optionButton.disabled = false; // Enable clicking on options
    }
}

function displayButtons() {
    const quizContainer = document.getElementById("quiz-container");

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);

    const exitButton = document.createElement("button");
    exitButton.textContent = "Exit";
    exitButton.addEventListener("click", exitQuiz);

    quizContainer.appendChild(restartButton);
    quizContainer.appendChild(exitButton);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resetOptions();
    displayQuestion();
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.remove());
}

function exitQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "<p>Quiz exited. Come back later to play again!</p>";
}

displayQuestion();