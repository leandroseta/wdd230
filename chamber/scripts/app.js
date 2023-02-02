//date for header

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.getElementById('date').textContent = fulldateUK;
document.getElementById('current-year').textContent = now.getFullYear();

//hamburger 

function toggleNavMenu() {
    document.getElementById("headerNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const computer = document.getElementById("hamburger");
computer.onclick = toggleNavMenu;

