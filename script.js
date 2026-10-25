const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#main-menu');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation menu')}));}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{if(menu)menu.classList.remove('open');if(menuButton)menuButton.setAttribute('aria-expanded','false')}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
