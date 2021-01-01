let checkDate = new Date("January 1, 2021 00:00:00").getTime();
let counterContainer = document.getElementById("counter");
let title = document.getElementById("title");
let message = document.getElementById("message");
message.classList.add("hidden");

if (new Date().getTime() > checkDate){
    celebrate();
}

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = checkDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").textContent = days;
  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("second").textContent = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
   celebrate();
  }
}, 1000);

function celebrate(){
    message.classList.remove("hidden");
    title.classList.add("hidden");
    counterContainer.classList.add("hidden");
    confetti.start(5000);  
}
