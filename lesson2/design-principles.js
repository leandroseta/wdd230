


const copyright = document.querySelector('#copyright');
const update = document.querySelector('#update');


copyright.textContent = `© ${new Date().getFullYear()}`;
update.textContent = `Last modified: ${new Date(document.lastModified).toLocaleString()}`;

