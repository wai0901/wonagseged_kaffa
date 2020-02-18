const headerBg = document.getElementById("header-bg");

// Header Section

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    headerBg.style.backgroundPositionY = (offset - 3400) * 0.03 + "px";
})