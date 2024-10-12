const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const audio = document.getElementById("background-audio"); // Reference to the audio element


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

// Music play on first interaction
function playMusicOnInteraction() {
  if (audio) {
      audio.play();  // Play the audio
  }

  // Remove event listeners after the first interaction
  window.removeEventListener("click", playMusicOnInteraction);
  window.removeEventListener("touchstart", playMusicOnInteraction);
  window.removeEventListener("keydown", playMusicOnInteraction);
}

// Attach event listeners to play music on any interaction
window.addEventListener("click", playMusicOnInteraction);
window.addEventListener("touchstart", playMusicOnInteraction);
window.addEventListener("keydown", playMusicOnInteraction);