const messages = [
  { text: "Hey Kajal 🎉", img: null },
  { text: "Today is your special day 💖", img: "photo1.jpg" },
  { text: "You’re not just my best friend…", img: null },
  { text: "You’re also the sweetest person I know 😊", img: "photo2.jpg" },
  { text: "Happy Birthday to the most amazing person I know!☺🤗🙂☺ 🎂🎁", img: "photo3.jpg" },
  { text: "Happy Birthday Kajal 🎉💖", img: null }
];

let currentMessage = 0;

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const messageBox = document.getElementById("messageBox");
const logo = document.getElementById("logo");
const music = document.getElementById("bgMusic");
const videoSection = document.getElementById("videoSection");
const emojiBackground = document.getElementById("emojiBackground");

// Floating emojis
const emojis = ["🎂","🎉","🎁","🎈","🌸","💐","🎊","🥳","😁","😸"];
function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 24 + 20 + "px";
  emoji.style.animationDuration = (5 + Math.random() * 5) + "s";
  emojiBackground.appendChild(emoji);

  setTimeout(() => emoji.remove(), 10000);
}
setInterval(createEmoji, 800);

// Start
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  nextBtn.classList.remove("hidden");
  music.play();
  showNextMessage();
});

nextBtn.addEventListener("click", showNextMessage);

// Show messages
function showNextMessage() {
  if (currentMessage < messages.length) {
    const msgData = messages[currentMessage];
    const div = document.createElement("div");
    div.className = "message";
    div.innerHTML = msgData.text;

    if (msgData.img) {
      const img = document.createElement("img");
      img.src = msgData.img;
      img.style.animationDelay = `${currentMessage * 0.3}s`; // delay based on message index
      div.appendChild(img);
    }

    messageBox.appendChild(div);

    // Hide logo after first slide
    if (currentMessage === 0) {
      setTimeout(() => { logo.style.display = "none"; }, 1000);
    }

    currentMessage++;
  } else {
    // End: hide messages, show video
    nextBtn.classList.add("hidden");
    messageBox.innerHTML = "";
    videoSection.classList.remove("hidden");
    const video = document.getElementById("collageVideo");
    video.play();

    // Show restart button
    restartBtn.classList.remove("hidden");
  }
}

// Restart button functionality
restartBtn.addEventListener("click", () => {
  messageBox.innerHTML = "";
  currentMessage = 0;
  logo.style.display = "block";
  videoSection.classList.add("hidden");
  videoSection.querySelector("video").pause();
  videoSection.querySelector("video").currentTime = 0;
  restartBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  music.currentTime = 0;
  music.play();
});
// Code check nhi karte bhyii 😂 
