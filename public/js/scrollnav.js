/* Navbar coloring effects */

$(document).ready(function() {
  changeNavColors();
});

function changeNavColors() {
  if ($(this).scrollTop() > 200) {
    $('nav').removeClass('dy-nav');
  }
  else {
    $('nav').addClass('dy-nav');
  }
}

$(document).scroll(function() {
  changeNavColors();
});
