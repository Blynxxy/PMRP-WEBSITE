const nav = document.getElementById('nav');
  const menu = document.getElementById('menu');
  const links = document.getElementById('links');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20));
  menu.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
