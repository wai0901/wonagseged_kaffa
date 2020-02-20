const headerBg = document.getElementById("header-bg"),
      svgOne = document.getElementById("body-one-svg-1"),
      svgTwo = document.getElementById("body-one-svg-2"),
      svgThree = document.getElementById("body-one-svg-3"),
      svgFour = document.getElementById("body-one-svg-4"),
      gear = document.getElementById("gear-group"),
      screenWidth = window.innerWidth;


// Header Section

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    headerBg.style.backgroundPositionY = (offset - 3400) * 0.03 + "px";
})

// Body Section One
// This is for the parallax effect

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    svgFour.setAttribute("y", (offset + 500) * 0.45 + "px");
    if (screenWidth >= 1100){
        gear.style.top = (offset - 800) * 0.6 + 'px';
        svgOne.setAttribute("y", (offset - 450) * 0.4 + "px");
        svgTwo.setAttribute("y", (offset - 350) * 0.35 + "px");
        svgThree.setAttribute("y", (offset - 50) * 0.25 + "px");
        
    } else {
        svgOne.setAttribute("y", (offset - 450) * 0.40 + "px");
        svgTwo.setAttribute("y", (offset - 250) * 0.35 + "px");
        svgThree.setAttribute("y", (offset + 200) * 0.25 + "px");
        svgFour.setAttribute("y", (offset + 800) * 0.25 + "px");
    }
})