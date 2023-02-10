//meet & Greet
const dayOfWeek = new Date().getDay();
        
        if (dayOfWeek == 1 || dayOfWeek == 2) 
           {
            const meet = document.querySelector('#meetAndGreet');
            meet.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';      
           } 


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
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const computer = document.getElementById("hamburger");
computer.onclick = toggleNavMenu;






