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

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
// });
// $('.back-to-top').click(function () {
//     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//     return false;
// });

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

// Check scroll position on page load or refresh
window.onload = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  let startY = window.pageYOffset;
  let targetY = 0;
  let distance = targetY - startY;
  let duration = 700; //adjust this value to control the scrolling speed

  // Animation function
  function smoothScroll(currentTime) {
    // Calculate time fraction
    let timeFraction = (currentTime - startTime) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // Apply the smooth scroll to the current position
    window.scrollTo(0, startY + distance * ease(timeFraction));

    // Continue the animation until it reaches the target position
    if (timeFraction < 1) {
      requestAnimationFrame(smoothScroll);
    }
  }

  // Easing function (for a smooth animation)
  function ease(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  // Get the current timestamp
  let startTime = performance.now();

  // Start the animation
  requestAnimationFrame(smoothScroll);
}

// smooth scroll for the marquee
  // Smooth scroll effect
// const marqueeContainer = document.querySelector('.marquee-container');

// marqueeContainer.addEventListener('mouseover', () => {
//   marqueeContainer.style.animation = 'marquee 20s linear infinite';
// });

// marqueeContainer.addEventListener('mouseout', () => {
//   marqueeContainer.style.animation = '';
// });