const dinosaur = document.getElementById("dinosaur");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

let gameStarted = false;
let score = 0;

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !gameStarted) {
        gameStarted = true;
        jump();
        moveObstacle();
    }
});

function jump() {
    if (!dinosaur.classList.contains("jump")) {
        dinosaur.classList.add("jump");
        setTimeout(() => {
            dinosaur.classList.remove("jump");
        }, 500);
    }
}

function moveObstacle() {
    let obstaclePosition = 100; // Initial position of the obstacle

    const obstacleMoveInterval = setInterval(() => {
        if (obstaclePosition > 0) {
            obstaclePosition -= 1; // Change obstacle position
            obstacle.style.right = obstaclePosition + "px"; // Update obstacle position
        } else {
            clearInterval(obstacleMoveInterval); // Stop moving obstacle when it reaches the edge
        }
    }, 10);
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

setInterval(() => {
    if (gameStarted) {
        updateScore();
    }
}, 1000);

setInterval(() => {
    const dinosaurBottom = parseInt(window.getComputedStyle(dinosaur).getPropertyValue('bottom'));
    const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    const obstacleBottom = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));

    if (obstacleRight < 50 && obstacleRight >= 0 && dinosaurBottom === 0 && obstacleBottom < 50) {
        alert("Game Over, score: " + score);
        score = 0;
        gameStarted = false;
    }
}, 10);
