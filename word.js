const wordChoice = document.getElementById("wordChoice");
const phraseChoice = document.getElementById("phraseChoice");
const wordToType = document.querySelector(".word-to-type");
const userInput = document.getElementById("userInput");
const validateBtn = document.getElementById("validateBtn");
const scoreValue = document.getElementById("scoreValue");

let score = 0;


function generateRandomWordOrPhrase() {
    const words = ["azerty", "javascript", "programmation", "informatique"];
    const phrases = ["Azerty est un type de clavier en français"," Les étudiants en informatiques sont censées maîtriser la language de javascript", "La programmation est une réalisation d'un programme en informatique", "L'informatique vient du mot formation et automatique"]
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

wordToType.textContent = generateRandomWordOrPhrase();

validateBtn.addEventListener("click", () => {
    const answer = userInput.value.trim().toLowerCase();
    const wordOrPhraseToType = wordToType.textContent.toLowerCase();
    
    if (answer === wordOrPhraseToType) {
        score++;
        scoreValue.textContent = score;
        alert("Très-bien, continuez!");
        wordToType.textContent = generateRandomWordOrPhrase();
    } else {
        alert("Mince, vous avez fait une erreur!");
    }
    userInput.value = "";
});


