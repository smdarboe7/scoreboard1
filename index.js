let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

function addHome(points) {
    homeScore += points;
    homeEl.textContent = homeScore;
}

function addGuest(points) {
    guestScore += points;
    guestEl.textContent = guestScore;
}