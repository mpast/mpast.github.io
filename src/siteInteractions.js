export function initializeSiteInteractions() {
  const header = document.querySelector('header');
  const navigation = document.querySelector('#nav-wrap');
  const headline = document.querySelector('.responsive-headline');
  const sections = [...document.querySelectorAll('header[id], section[id]')];
  const links = [...document.querySelectorAll('#nav a[href^="#"]')];

  function resize() {
    header.style.height = `${window.innerHeight}px`;
    headline.style.fontSize = `${Math.max(40, Math.min(90, headline.parentElement.clientWidth / 10))}px`;
    updateNavigation();
  }

  function updateNavigation() {
    const height = header.getBoundingClientRect().height;
    const scroll = window.scrollY;
    navigation.classList.toggle('opaque', scroll >= height * 0.2);
    navigation.style.display = scroll > height * 0.2 && scroll < height && window.innerWidth > 768 ? 'none' : '';
    const active = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * 0.35).at(-1) || header;
    links.forEach(link => link.parentElement.classList.toggle('current', link.hash === `#${active.id}`));
  }

  function scrollToSection(event) {
    const link = event.target.closest('a.smoothscroll');
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    window.location.hash = link.hash;
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', updateNavigation, { passive: true });
  document.addEventListener('click', scrollToSection);
  return () => {
    window.removeEventListener('resize', resize);
    window.removeEventListener('scroll', updateNavigation);
    document.removeEventListener('click', scrollToSection);
  };
}
