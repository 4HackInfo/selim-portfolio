const menu=document.querySelector('#menu');
const nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});
document.querySelectorAll('#nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='☰'}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const detailsToggle=document.querySelector('#detailsToggle');const details=document.querySelector('#details');
detailsToggle?.addEventListener('click',()=>{const open=details.classList.toggle('open');detailsToggle.setAttribute('aria-expanded',String(open));detailsToggle.innerHTML=open?'Close workflow <span>−</span>':'Explore the workflow <span>＋</span>'});
document.querySelectorAll('.tool').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.tool').forEach(item=>item.classList.remove('active'));document.querySelectorAll('.tool-info').forEach(item=>item.classList.remove('active'));button.classList.add('active');document.querySelector(`#info-${button.dataset.tool}`)?.classList.add('active')}));
// A subtle pointer glow on desktop; disabled for touch-first devices.
if(matchMedia('(pointer:fine)').matches){const glow=document.querySelector('.cursor-glow');document.addEventListener('pointermove',event=>{glow.style.left=`${event.clientX}px`;glow.style.top=`${event.clientY}px`})}
