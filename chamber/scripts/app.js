
//modified update
const update = document.querySelector('#update');
update.textContent = `Last modified: ${new Date(document.lastModified).toLocaleString()}`;

//header date
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.getElementById('date').textContent = fulldateUK;
document.getElementById('current-year').textContent = now.getFullYear();

//hamburger menu
function toggleNavMenu() {
    document.getElementById("headerNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const computer = document.getElementById("hamburger");
computer.onclick = toggleNavMenu;






