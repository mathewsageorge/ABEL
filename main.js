const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
// const audio = document.getElementById("background-audio"); // Reference to the audio element

$(document).on('click', function(){
  document.getElementById("my_audio").play();
  console.log('Shaadi me zaroor aana');
});


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

// // Music play on first interaction
// function playMusicOnInteraction() {
//   if (audio) {
//       audio.play();  // Play the audio
//   }

//   // Remove event listeners after the first interaction
//   window.removeEventListener("click", playMusicOnInteraction);
//   window.removeEventListener("touchstart", playMusicOnInteraction);
//   window.removeEventListener("keydown", playMusicOnInteraction);
// }

// // Attach event listeners to play music on any interaction
// window.addEventListener("click", playMusicOnInteraction);
// window.addEventListener("touchstart", playMusicOnInteraction);
// window.addEventListener("keydown", playMusicOnInteraction);

// ... existing code ...

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const eventDate = new Date("Jan 06, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
      <div class="countdown-message">This much time to go!</div>
      <div class="countdown-values">
          <span class="countdown-item">${days}<small>Days</small></span>
          <span class="countdown-item">${hours}<small>Hours</small></span>
          <span class="countdown-item">${minutes}<small>Minutes</small></span>
          <span class="countdown-item">${seconds}<small>Seconds</small></span>
      </div>
  `;

  if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "Event Started";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// ... existing code ...


 window.onload = function() {
            document.getElementById('welcome-popup').classList.add('show');
        };

        function closePopup() {
            document.getElementById('welcome-popup').classList.remove('show');
        }

        // Show the RSVP popup
        document.querySelector('.rsvp-btn').addEventListener('click', () => {
            document.getElementById('welcome-popup').classList.remove('show');
            document.getElementById('rsvp-popup').style.display = 'flex';
        });

        // Hide the RSVP popup
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.getElementById('rsvp-popup').style.display = 'none';
        });

        document.getElementById('rsvp-form').addEventListener('submit', (e) => {
            e.preventDefault();

            // Hide the RSVP popup
            document.getElementById('rsvp-popup').style.display = 'none';
            // Show the success modal
            document.getElementById('success-modal').style.display = 'flex';

            // Automatically close the success modal after 3 seconds
            setTimeout(() => {
                document.getElementById('success-modal').style.display = 'none';
            }, 2800);

            // Prepare the form data
            const formData = new FormData(e.target);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                guests: formData.get('guests'),
                message: formData.get('message')
            };

            // Send the data to Google Sheets asynchronously
            fetch('https://script.google.com/macros/s/AKfycbzpASBl1tVbcmPCRvV5cHEEiIyOeglVPaiM_ykZ38QsHFdtldVvQLYs8-tY5Lj0wZWF/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).catch(error => {
                console.error('Submission error:', error);
            });

            // Reset the form
            document.getElementById('rsvp-form').reset();
        });

        // Add event listener to the "BLESS US" button
        document.getElementById('bless-us-btn').addEventListener('click', function() {
            confetti({
                particleCount: 500,
                spread: 100,
                origin: { y: 0.6 }
            });
        });


        

    

        
