// countdown timer
//set the date for countdown
var countDownDate = new Date("Jan 1, 2020 12:00:00").getTime();
// update the count down every 1 second
var x = setInterval(function() {
  // get todays date and time
  // var now = new Date().getTime();
  var now = new Date().getTime();

  // find the distance between now and the count down date
  var distance = countDownDate - now;

  // time calculations ofr days, hours, minutes & seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(now);

  // display the results inside the element with id = countdown
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // document.getElementbyId("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // if the count down if complete, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementbyId("countdown").innerHTML = "Deal Expired!";
  }
}, 1000);


// materialize carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, Option);
});
