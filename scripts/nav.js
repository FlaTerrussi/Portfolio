window.addEventListener("scroll", function () {
     var nav = document.querySelector("#navbar");
     var navContent = document.querySelector(".nav")
     nav.classList.toggle("scroll", window.scrollY > 0);
     navContent.classList.toggle("scroll_content", window.scrollY > 0);
});
