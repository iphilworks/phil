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


function toggleWebdesign() {
var x = document.getElementById('CntToggleWebdesign');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
}

function toggleWebdev() {
var x = document.getElementById('CntToggleWebdev');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
   }
}

function toggleSEO() {
var x = document.getElementById('CntToggleSEO');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
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


document.onkeydown = function(e) {
  var message='Content is protected\nYou cannot view the page source.';
  if (e.ctrlKey &&
  (e.keyCode === 67 ||
  e.keyCode === 86 ||
  e.keyCode === 85 ||
  e.keyCode === 117)) {
  alert(message);
  return false;
  } else {
  return true;
  }
  };
  $(document).keypress('u',function(e) {
  if(e.ctrlKey)
  {
  return false;
  }
  else
  {
  return true;
  }
});


$(document).keydown(function (event) {
  var message = 'Content is protected\nYou cannot view the Dev Tools.';
  if (event.keyCode == 123) { // Prevent F12
  alert(message);
  return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
  alert(message);
  return false;
  }
});


document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }   
});