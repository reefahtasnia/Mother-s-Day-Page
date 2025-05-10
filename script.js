const heart = document.getElementById("heartBtn");
const envelope = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

let isOpen = false;

// Toggle envelope open/close on heart click
heart.addEventListener("click", () => {
  if (!isOpen) {
    // Open the envelope
    envelope.classList.add("flap");
    setTimeout(() => {
      letter.classList.remove("hidden");
      letter.classList.add("show");
    }, 1000); // Slightly faster reveal
    isOpen = true;
  } else {
    // Close the envelope
    letter.classList.remove("show");
    letter.classList.add("hidden");
    setTimeout(() => {
      envelope.classList.remove("flap");
    }, 500); // Delay the flap closing slightly
    isOpen = false;
  }
});