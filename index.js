let scoreHome = 0
let scoreGuest = 0

let scoreHomeH3 = document.getElementById("score-home") 
let scoreGuestH3 = document.getElementById("score-guest")


// Home score functions
function add1Home() {
    scoreHome = scoreHome + 1
    scoreHomeH3.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        scoreHomeH3.classList.add("winner")
        scoreGuestH3.classList.remove("winner")
    }
}

function add2Home() {
    scoreHome = scoreHome + 2
    scoreHomeH3.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        scoreHomeH3.classList.add("winner")
        scoreGuestH3.classList.remove("winner")
    }
}

function add3Home() {
    scoreHome = scoreHome + 3
    scoreHomeH3.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        scoreHomeH3.classList.add("winner")
        scoreGuestH3.classList.remove("winner")
    }
}

// Guest score functions
function add1Guest() {
    scoreGuest = scoreGuest + 1
    scoreGuestH3.textContent = scoreGuest
     if (scoreGuest > scoreHome) {
        scoreGuestH3.classList.add("winner")
        scoreHomeH3.classList.remove("winner")
    }
}

function add2Guest() {
    scoreGuest = scoreGuest + 2
    scoreGuestH3.textContent = scoreGuest
     if (scoreGuest > scoreHome) {
        scoreGuestH3.classList.add("winner")
        scoreHomeH3.classList.remove("winner")
    }
}

function add3Guest() {
    scoreGuest = scoreGuest + 3
    scoreGuestH3.textContent = scoreGuest
     if (scoreGuest > scoreHome) {
        scoreGuestH3.classList.add("winner")
        scoreHomeH3.classList.remove("winner")
    }
}

// Reset game function
function reset() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeH3.textContent = 0
    scoreGuestH3.textContent = 0
    scoreHomeH3.classList.remove("winner")
    scoreGuestH3.classList.remove("winner")
}