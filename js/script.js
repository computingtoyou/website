var captionLength = 0;
var captions = Array('BOYS', 'GIRLS', 'KIDS', 'TEENS', 'STUDENTS', 'POOR', 'EVERYONE', 'YOU');
var caption = captions[0];
var pos = 0;
var userString = "";
var startTyping = true;
var IntroSection = 623;

$(document).ready(function() {

  setInterval ('cursorAnimation()', 600);
  captionEl = $('#caption');

  $(document).keydown(function(e){
    startTyping = false;
    if(e.keyCode == 8){
      e.preventDefault();
      if(userString != ""){
        userString = userString.slice(0,-1);
      }
    }
      userString += String.fromCharCode(e.keyCode);
      captionEl.html(userString.toUpperCase());
      if(e.keyCode == 13){
        startTyping = true;
        captions.push(userString.slice(0,-1));
        type();
      }
  });

    type();
});

// Navbar click listener - Smooth scroll

$("nav li a").click(function(event) {
  event.preventDefault();

  var dest = 0;
  var navbar_size = 64;

  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
    dest = $(document).height() - $(window).height();
  }
  else {
    dest = $(this.hash).offset().top;
  }

  // Removes the navbar size of the destination;
  dest = dest - navbar_size;
  $('html,body').animate({scrollTop:dest}, 500, 'swing');
});

/* Typing effects */
function type() {
  if(startTyping == true){
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
      setTimeout('type()', 50);
    } else {
      if (pos != (captions.length - 1)) {
          setTimeout('erase()', 2000);
      }else{
        pos = -1;
        setTimeout('type()', 50);
      }
    }
  }
}

function erase() {
    if(startTyping == true){
      captionEl.html(caption.substr(0, captionLength--));
      if(captionLength >= 0) {
        setTimeout('erase()', 50);
      } else {
        captionLength = 0;
        pos++;
        if (pos < captions.length) {
          caption = captions[pos];
          setTimeout('type()', 500);
        }
      }
    }
}

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'fast', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');
}
/* END - Typing effects */
