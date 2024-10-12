let scoreHome = 0
let scoreAway = 0

let scoreHomeH3 = document.getElementById("score-home") 
let scoreAwayH3 = document.getElementById("score-away")


// Home score functions
function add1Home() {
    scoreHome = scoreHome + 1
    scoreHomeH3.textContent = scoreHome
    if (scoreHome > scoreAway) {
        scoreHomeH3.classList.add("winner")
        scoreAwayH3.classList.remove("winner")
    }
}

function add2Home() {
    scoreHome = scoreHome + 2
    scoreHomeH3.textContent = scoreHome
    if (scoreHome > scoreAway) {
        scoreHomeH3.classList.add("winner")
        scoreAwayH3.classList.remove("winner")
    }
}

function add3Home() {
    scoreHome = scoreHome + 3
    scoreHomeH3.textContent = scoreHome
    if (scoreHome > scoreAway) {
        scoreHomeH3.classList.add("winner")
        scoreAwayH3.classList.remove("winner")
    }
}

// Away score functions
function add1Away() {
    scoreAway = scoreAway + 1
    scoreAwayH3.textContent = scoreAway
     if (scoreAway > scoreHome) {
        scoreAwayH3.classList.add("winner")
        scoreHomeH3.classList.remove("winner")
    }
}

function add2Away() {
    scoreAway = scoreAway + 2
    scoreAwayH3.textContent = scoreAway
     if (scoreAway > scoreHome) {
        scoreAwayH3.classList.add("winner")
        scoreHomeH3.classList.remove("winner")
    }
}

function add3Away() {
    scoreAway = scoreAway + 3
    scoreAwayH3.textContent = scoreAway
     if (scoreAway > scoreHome) {
        scoreAwayH3.classList.add("winner")
        scoreHomeH3.classList.remove("winner")
    }
}

// Reset game function
function reset() {
    scoreHome = 0
    scoreAway = 0
    scoreHomeH3.textContent = 0
    scoreAwayH3.textContent = 0
    scoreHomeH3.classList.remove("winner")
    scoreAwayH3.classList.remove("winner")
}