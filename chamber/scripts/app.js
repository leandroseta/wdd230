
//Get Current date
const todayDate = new Date();

//Get year from current date and use it next to copyright 


const copyright = document.querySelector('#copyright');
const update = document.querySelector('#update');


copyright.textContent = `© ${new Date().getFullYear()}`;
update.textContent = `Last modified: ${new Date(document.lastModified).toLocaleString()}`;


//Get Date and time from todayDate and use it for last update
let editDate = document.lastModified;
document.querySelector("#lastchange").innerHTML = editDate;

//get date for header set up
const nowdate = document.querySelector(".today");
const fulldate = new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(todayDate);
nowdate.innerHTML = `<em>${fulldate}</em>`;

//making the hamburger work

function toggleNavMenu() {
    document.getElementById("headerNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const computer = document.getElementById("hamburger");
computer.onclick = toggleNavMenu;

