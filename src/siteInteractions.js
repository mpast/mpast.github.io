export function initializeSiteInteractions() {
  const header = document.querySelector('header');
  const navigation = document.querySelector('#nav-wrap');
  const sections = [...document.querySelectorAll('header[id], section[id]')];
  const links = [...document.querySelectorAll('#nav a[href^="#"]')];

  function updateNavigation() {
    navigation.classList.toggle('opaque', window.scrollY > 24);
    const active = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * 0.35).at(-1) || header;
    links.forEach(link => {
      const current = link.hash === `#${active.id}`;
      link.parentElement.classList.toggle('current', current);
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function scrollToSection(event) {
    const link = event.target.closest('a.smoothscroll');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    window.history.pushState(null, '', link.hash);
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }

  updateNavigation();
  window.addEventListener('resize', updateNavigation);
  window.addEventListener('scroll', updateNavigation, { passive: true });
  document.addEventListener('click', scrollToSection);
  return () => {
    window.removeEventListener('resize', updateNavigation);
    window.removeEventListener('scroll', updateNavigation);
    document.removeEventListener('click', scrollToSection);
  };
}
