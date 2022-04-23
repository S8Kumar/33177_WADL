//ACCORDION BUTTON TOGGLE COLLAPSE
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", 
  function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
}

//AUTOSCROLL DIV OVERFLOW
var my_time;
var count = 0;
setTimeout('pageScroll()', 1200);
function pageScroll() {
  // If condition to set repeat 
  if (count < 2) {
    var objDiv = document.getElementById("data");
    objDiv.scrollTop = objDiv.scrollTop + 1;
    if (objDiv.scrollTop == (objDiv.scrollHeight - 61)) {
      setTimeout(function() {
        objDiv.scrollTop = 5;
        count++;
        }, 1200);
    }
    //set scrolling time start
    my_time = setTimeout('pageScroll()', 18);
    //set scrolling time end
  }
}


