const experience = document.querySelector("#experience-nav");
const education = document.querySelector("#education-nav");
const activities = document.querySelector("#activities-nav");
const home = document.querySelector("#home");

const experienceContent = document.querySelector("#experience");
const educationContent = document.querySelector("#education");
const activtiesContent = document.querySelector("#activities");


experience.addEventListener("click",() => {
    document.querySelector(".active").className = "";
    experience.querySelector("span").className = "active";
});

home.addEventListener("click",() => {
    document.querySelector(".active").className = "";
    home.querySelector("span").className = "active";
});

education.addEventListener("click",() => {
    document.querySelector(".active").className = "";
    education.querySelector("span").className = "active";
});

activities.addEventListener("click",() => {
    document.querySelector(".active").className = "";
    activities.querySelector("span").className = "active";
});


window.addEventListener("scroll", () => {
    if (scrollY >= activtiesContent.offsetTop - 60) {
        document.querySelector(".active").className = "";
        activities.querySelector("span").className = "active";
    }
    else if (scrollY >= educationContent.offsetTop - 60) {
        document.querySelector(".active").className = "";
        education.querySelector("span").className = "active";
    }
    else if (scrollY >= experienceContent.offsetTop - 60) {
        document.querySelector(".active").className = "";
        experience.querySelector("span").className = "active";
    }
    else{
        document.querySelector(".active").className = "";
        home.querySelector("span").className = "active";
    }
});