// Animation Width On Scrolling:

// 2- Our Skills Section:
let ourSkillsSection = document.querySelector(".our-skills");
let ourSkillsProgress = document.querySelectorAll(
    ".our-skills .container .stats > div span"
);

// 1- Our Stats Section:
let statsSection = document.querySelector("body > .stats");
let statsProgress = document.querySelectorAll(
    ".stats .container .content .box h1"
);

window.onscroll = function () {
    if (scrollY >= ourSkillsSection.offsetTop) {
        ourSkillsProgress.forEach((el) => {
            el.style.width = el.dataset.progress;
        });
    }
    if (scrollY >= statsSection.offsetTop) {
        setInterval(() => {
            statsProgress.forEach((stat) => {
                if (stat.dataset.stat != stat.innerHTML) {
                    stat.innerHTML++;
                }
            });
        }, 100);
    }
};

//-----------------------------------------------------------------

// Create Countdown Timer:
let eventDate = new Date("Dec 31, 2025 23:59:59").getTime();

let counter = setInterval(() => {
    let currentDate = new Date().getTime();
    let dateDifference = eventDate - currentDate;

    let secondsPerDay = 1000 * 60 * 60 * 24;
    let secondsPerHour = 1000 * 60 * 60;
    let secondsPerMinute = 1000 * 60;

    let remainder;

    let days = dateDifference / secondsPerDay;
    remainder = dateDifference % secondsPerDay;
    let hours = remainder / secondsPerHour;
    remainder = remainder % secondsPerHour;
    let minutes = remainder / secondsPerMinute;
    remainder = remainder % secondsPerMinute;
    let seconds = remainder / 1000;

    document.querySelector(".days").innerHTML = Math.floor(days).toString();
    document.querySelector(".hours").innerHTML = Math.floor(hours).toString();
    document.querySelector(".minutes").innerHTML =
        Math.floor(minutes).toString();
    document.querySelector(".seconds").innerHTML =
        Math.floor(seconds).toString();
}, 1000);
