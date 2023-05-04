function ready() {
  if (screen.width <= 810) {
    const nav = document.querySelector("nav");
    
    const link = document.createElement("a");
    link.className = "icon";
    link.href = "javascript:void(0)";
    nav.appendChild(link);
    link.onclick = function(){
      const x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    };

    const heading = document.createElement("h4");
    const menu = document.createTextNode("Menu");

    heading.appendChild(menu);
    link.appendChild(heading);

    const myLinks = document.getElementById("myLinks");
    myLinks.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", ready);