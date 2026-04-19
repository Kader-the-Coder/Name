window.addEventListener("load", () => {
  const name = document.getElementById("name");

  setTimeout(() => {
    name.classList.add("loaded");
  }, 100);
});

let showingEnglish = true;

function handleNameClick() {
  toggleName();
  playAudio();

  const hint = document.getElementById("hint");
  hint.style.opacity = 0;
}

/* Smooth animated swap (no jank) */
function toggleName() {
  const name = document.getElementById("name");

  name.style.opacity = 0;
  name.style.transform = "scale(0.9)";
  name.style.filter = "blur(6px)";

  setTimeout(() => {
    if (showingEnglish) {
      name.textContent = "زَيْد";
      name.classList.add("arabic");
    } else {
      name.textContent = "Zayd";
      name.classList.remove("arabic");
    }

    name.style.opacity = 1;
    name.style.transform = "scale(1)";
    name.style.filter = "blur(0px)";

    showingEnglish = !showingEnglish;
  }, 160);
}

/* Audio on name click */
function playAudio() {
  const audio = document.getElementById("nameAudio");
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

/* Story toggle (FIXED, working) */
function toggleStory() {
  const content = document.getElementById("storyContent");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}