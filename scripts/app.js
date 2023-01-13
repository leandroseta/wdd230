

const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');
const update = document.querySelector('#update');

h1.textContent = 'Leandro Seta';
copyright.textContent = `© ${new Date().getFullYear()}`;
update.textContent = `Last modified: ${new Date(document.lastModified).toLocaleString()}`;

