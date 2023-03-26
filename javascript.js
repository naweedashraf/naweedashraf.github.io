const experience = document.querySelector("#experience-nav");
const home = document.querySelector("#home");

const experienceContent = document.querySelector("#experience");


experience.addEventListener("click",() => {
    document.querySelector(".active").className = "";
    experience.querySelector("span").className = "active";
});

home.addEventListener("click",() => {
    document.querySelector(".active").className = "";
    home.querySelector("span").className = "active";
});
window.addEventListener("scroll", () => {
    if (scrollY >= experienceContent.offsetTop - 60) {
        document.querySelector(".active").className = "";
        experience.querySelector("span").className = "active";
    }
    else{
        document.querySelector(".active").className = "";
        home.querySelector("span").className = "active";
    }
});