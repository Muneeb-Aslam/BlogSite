const header = document.querySelector("[data-header]");
const backtoTop = document.querySelector("[data-top]")


window.addEventListener("scroll", () => {
    if (window.scrollY > 80){
      console.log("Hello");
      header.classList.add("active");
      // backtoTop.classList.add("active");
    }
    else {
        header.classList.remove("active");
        // backtoTop.classList.remove("active");
    }
});
