$(function() {
  var pull = $('#pull');
  menu = $('nav ul');
  menuHeight = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function() {
    if($(window).width() > 800) $('nav ul').removeAttr('style');
  });
});

//toggles
function toggleWebdesign() {
  var x = document.getElementById('CntToggleWebdesign');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } 
  else {
    x.style.display = 'none';
  }
}

function toggleWebdev() {
  var x = document.getElementById('CntToggleWebdev');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } 
  else {
    x.style.display = 'none';
  }
}

function toggleSEO() {
  var x = document.getElementById('CntToggleSEO');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } 
  else {
    x.style.display = 'none';
  }
}

function toggleLGD() {
  var x = document.getElementById('CntToggleLGD');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

//disabling inspect element, downloading website code and etc., viewing developer tools with ctrl funtions, F functions
document.onkeydown = function(e) {
  var message='Content is protected\nYou cannot view the page source.';
  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
    alert(message);
    return false;
  } 
  else {
    return true;
  }
};

$(document).keypress('u',function(e) {
  if(e.ctrlKey) {
    return false;
  }
  else {
    return true;
  }
});


$(document).keydown(function (event) {
  var message = 'Content is protected\nYou cannot view the Dev Tools.';
  if (event.keyCode == 123) { // Prevent F12
    alert(message);
    return false;
  } 
  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
    alert(message);
    return false;
  }
});

document.addEventListener("keydown", function(event){
  var message = 'Content is protected\nYou cannot view the Dev Tools.';
  var key = event.key || event.keyCode;

  if (key == 123) {
    alert(message)
    return false;
  } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
    alert(message)
    return false;
  } else if (event.ctrlKey) {
    event.preventDefault();
  }
}, false);

function disableRightClick() {
  if (event.button == 2) {
    alert('Content is protected\nRight Click is Disabled')
  }
}
document.onmousedown = disableRightClick

// //font awesome icons hover animation
// $('[data-toggle=tooltip]').tooltip();

// $('.hover-animation').hover(
//   function() {
//     $( this ).toggleClass( 'animated rubberBand ' + $( this ).attr('data-hover-color') + '-text' );
//   }
// );

//preloader gif
// var loader;
// function loadNow(opacity) {
//     if (opacity <= 0) {
//         displayContent();
//     } else {
//         loader.style.opacity = opacity;
//         window.setTimeout(function() {
//             loadNow(opacity - 0.004);
//         }, 10);
//     }
// }

// function displayContent() {
//     loader.style.display = 'none';
//     document.getElementById('content').style.display = 'block';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     loader = document.getElementById('loader');
//     loadNow(1);
// });

//Responsive loading gif while page loads
  $(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
  });