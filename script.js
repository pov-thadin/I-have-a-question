let yesSize = 18;
let messages = [
    "Are you really sure? 😢",
    "Just think again maybe you click the wrong button 😉",
    "Come on, I know you like me! 🥺",
    "Don't break my heart 💔",
    "You’ll regret this! 🙄",
    "Pretty please? 🥰",
    "Okay, last chance! 😏",
];

let msgIndex = 0;

function sayYes() {
    document.getElementById("question").innerText = "Yay! I luv u!🫶🏻❤️";
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
        document.getElementById("question").innerText = "No is not an option anymore, you will be mine no matter what 🫵";
        document.getElementById("noBtn").style.display = "none"; // Hide "No" button after too many tries
    }
}
