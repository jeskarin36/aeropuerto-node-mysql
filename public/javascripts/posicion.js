
let header= document.querySelector(".header");


window.onscroll = function() {
    var y = window.scrollY;
    if(y>110){
        header.setAttribute("class","estilo");
    }
    if(y<110){
        header.removeAttribute("class","estilo");
    }
  };

