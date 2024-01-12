//i have used the gsap library for smothly scrolling and animation 
let cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
  blur.style.left = e.x - 250 + "px";
  blur.style.top = e.y - 250 + "px";
});
let h4all = document.querySelectorAll(".links li a");
console.log(h4all)
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
     cursor.style.scale = 4;
     cursor.style.border = "1px solid #fff";
     cursor.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
     cursor.style.scale = 1;
     cursor.style.border = "0px solid #95C11E";
     cursor.style.backgroundColor = "#95C11E";
    });
  });

gsap.to("header",{
    backgroundColor:"#000000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"header",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }

})
gsap.to("#main",{
    backgroundColor:"#000000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

})
gsap.from(".aboutus,#about img",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:3
    }

})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:2
    }
})
gsap.from("#quote1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#quote2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})