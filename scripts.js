
// Body Section One Parallax Effect

$(window).scroll(() => {
    let offset = $(window).scrollTop();
    let screenWidth = $(window).width();
    let screenHeight = $(window).height();
    $("#header-bg").css("backgroundPositionY", offset * 0.03 + "px");
    if (screenWidth > 900 && screenHeight > 1600){
        $(".gear-group").css("top", (offset - 100) * 0.4 + 'px');
        $(".gear").css("width", 700 + 'px');
        $(".gear").css("height", 700 + 'px');
        $("#body-one-svg-1").attr("y", (offset - 550) * 0.4 + "px");
        $("#body-one-svg-2").attr("y", (offset - 250) * 0.35 + "px");
        $("#body-one-svg-3").attr("y", (offset - 200) * 0.25 + "px");
    } else { 
        $(".gear-group").css("top", (offset - 900) * 0.4 + 'px');
        $("#body-one-svg-1").attr("y", (offset - 640) * 0.5 + "px");
        $("#body-one-svg-2").attr("y", (offset - 370) * 0.4 + "px");
        $("#body-one-svg-3").attr("y", (offset - 170) * 0.35 + "px");
    }
})

// Body Section One fade-in animation

const left ="anime-left 1s 0.4s forwards ease-out";
const up = "anime-up 1s 0.7s forwards ease-out";
const right ="anime-right 1s 1.1s forwards ease-out"

const images = document.querySelector(".ethiopia-map");

observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
        $(".anime-1-left").css("animation", left);
        $(".anime-1-up").css("animation", up);
        $(".anime-1-right").css("animation", right);
    } else {
        $(".anime-1-left").css("animation", "none");
        $(".anime-1-up").css("animation", "none");
        $(".anime-1-right").css("animation", "none");
    }
})

observer.observe(images)

// Body Section Two fade-in animation
        
const images2 = document.querySelector(".body-two-bg");

observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
        $(".anime-2-left").css("animation", left);
        $(".anime-2-right").css("animation", right);
    } else {
        $(".anime-2-left").css("animation", "none");
        $(".anime-2-right").css("animation", "none");
    }
})

observer.observe(images2)

// Body Section Three fade-in animation

const images3 = document.querySelector(".b-three-img");

observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
        $(".anime-3-left").css("animation", left);
        $(".anime-3-up").css("animation", up);
    } else {
        $(".anime-3-left").css("animation", "none");
        $(".anime-3-up").css("animation", "none");
    }
})

observer.observe(images3)

// newsletter submit

function newsletter(event) {
    let email = document.getElementById("newsletter-email").value;
    if (event.keyCode === 13 && validateEmail(email)) {
        event.preventDefault();
        document.getElementById("newsletter-label").innerHTML = "Thank you for subscription!!";
    } else {
        return false;
    }
}

// Temporary, will change to server side email validation later.

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

