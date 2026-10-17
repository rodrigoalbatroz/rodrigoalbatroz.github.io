document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{const nav=document.querySelector('.nav nav');if(nav)nav.classList.remove('open')}));
