

document.getElementById("defaultOpen").click(); 

function Open(Name) {
    
    var i, box, tablinks;
    box = document.getElementsByClassName("box");
    for (i = 0; i < box.length; i++) {
        box[i].style.opacity = 0;
        box[i].style.display = "none";
    }

    var el = document.getElementById(Name);
    fadeIn(el, 400); 
document.getElementById(Name).style.display = "block";
	
}



function fadeIn(el, time) {

    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  }