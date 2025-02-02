let yesSize = 18;
let messages = [
    "Are you really sure? 😢",
    "Think again... I'm a great catch! 😉",
    "Come on, give me a chance! 🥺",
    "Don't break my heart 💔",
    "You’ll regret this! 😆",
    "Pretty please? 🥰",
    "Pls.......☹️",
    "Okay, last chance! 😏",
];

let msgIndex = 0;

function sayYes() {
    document.getElementById("question").innerText = "Yay! I love you! ❤️";
    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";
}

function sayNo() {
    yesSize += 10; // Make "Yes" button bigger
    document.getElementById("yesBtn").style.fontSize = yesSize + "px";
    
    // Show a different message each time
    if (msgIndex < messages.length) {
        document.getElementById("question").innerText = messages[msgIndex];
        msgIndex++;
    } else {
        document.getElementById("question").innerText = "No is not an option anymore! 😈";
        document.getElementById("noBtn").style.display = "none"; // Hide "No" button after too many tries
    }
}
