/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function () {
  handleTopNavAnimation();
});

$(window).load(function () {
  handleTopNavAnimation();
});

function handleTopNavAnimation() {
  var top = $(window).scrollTop();

  if (top > 10) {
    $('#site-nav').addClass('navbar-solid');
  }
  else {
    $('#site-nav').removeClass('navbar-solid');
  }
}

/* countdown timer */

// Set the date we're counting down to
var countDownDate = new Date("Dec 28, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var timeRemaining = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// dark mode


/*
 * Registration Form
*/

$('#registration-form').submit(function (e) {
  e.preventDefault();

  var postForm = { //Fetch form data
    'fname': $('#registration-form #fname').val(),
    'lname': $('#registration-form #lname').val(),
    'email': $('#registration-form #email').val(),
    'cell': $('#registration-form #cell').val(),
    'address': $('#registration-form #address').val(),
    'zip': $('#registration-form #zip').val(),
    'city': $('#registration-form #city').val(),
    'program': $('#registration-form #program').val()
  };

  $.ajax({
    type: 'POST',
    url: './assets/php/contact.php',
    data: postForm,
    dataType: 'json',
    success: function (data) {
      if (data.success) {
        $('#registration-msg .alert').html("Registration Successful");
        $('#registration-msg .alert').removeClass("alert-danger");
        $('#registration-msg .alert').addClass("alert-success");
        $('#registration-msg').show();
      }
      else {
        $('#registration-msg .alert').html("Registration Failed");
        $('#registration-msg .alert').removeClass("alert-success");
        $('#registration-msg .alert').addClass("alert-danger");
        $('#registration-msg').show();
      }
    }
  });
});

/*
 * SmoothScroll
*/

smoothScroll.init();

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}