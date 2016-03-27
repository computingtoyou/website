var captionLength = 0;
var captions = Array('BOYS', 'GIRLS', 'KIDS', 'TEENS', 'STUDENTS', 'POOR', 'EVERYONE', 'YOU');
var caption = captions[0];
var pos = 0;
var userString = "";
var startTyping = true;
var IntroSection = 623;
var typeTimeout = null;

$(document).ready(function() {

  setInterval ('cursorAnimation()', 600);
  captionEl = $('#caption');
  type();

  $(document).keydown(function(e){
    if (isInfoVisible()) {
      clearTimeout(typeTimeout);
      startTyping = false;

      if(e.keyCode == 8){ //backspace
        e.preventDefault();
        if(userString != ""){
          userString = userString.slice(0,-1);
        }
      }
      else {
        userString += String.fromCharCode(e.keyCode);
      }

      captionEl.html(userString.toUpperCase());

      typeTimeout = setTimeout('addToCaptionArray()', 2000);
    }
  });
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
      pos = pos < (captions.length - 1) ? pos + 1 : 0;
      caption = captions[pos];
      setTimeout('type()', 500);
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

function isInfoVisible() {
  var $elem = $('#caption');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function addToCaptionArray() {
  captions.push(captionEl.text());
  userString = "";
  caption = captionEl.text();
  captionLength = caption.length;
  startTyping = true;
  erase();
}
/* END - Typing effects */
