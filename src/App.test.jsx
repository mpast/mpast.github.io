import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import data from './yourdata';

let root;
let container;

beforeEach(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
  window.matchMedia = vi.fn(() => ({ matches: false }));
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.restoreAllMocks();
});

function renderApp() {
  act(() => root.render(<App />));
}

describe('portfolio after dependency upgrades', () => {
  it('renders all sections and portfolio links', () => {
    renderApp();
    expect(container.querySelector('h1').textContent).toContain(data.name);
    for (const id of ['home', 'about', 'portfolio', 'contact']) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
    expect(container.querySelectorAll('.portfolio-item')).toHaveLength(data.portfolio.length);
    expect(container.querySelector('a.email').href).toBe(`mailto:${data.contactEmail}`);
    expect(container.querySelector('a[href="CV.pdf"]').rel).toContain('noopener');
  });

  it('scrolls to a navigation target and respects reduced motion', () => {
    renderApp();
    window.location.hash = '#nav-wrap';
    const target = container.querySelector('#about');
    target.scrollIntoView = vi.fn();
    container.querySelector('#nav a[href="#about"]').click();
    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(window.location.hash).toBe('#about');
    window.matchMedia.mockReturnValue({ matches: true });
    container.querySelector('#nav a[href="#about"]').click();
    expect(target.scrollIntoView).toHaveBeenLastCalledWith({ behavior: 'instant' });
  });

  it('updates active navigation and keeps mobile navigation visible', () => {
    renderApp();
    const header = container.querySelector('header');
    const nav = container.querySelector('#nav-wrap');
    vi.spyOn(header, 'getBoundingClientRect').mockReturnValue({ top: -300, height: 1000 });
    vi.spyOn(container.querySelector('#about'), 'getBoundingClientRect').mockReturnValue({ top: 100 });
    vi.spyOn(container.querySelector('#portfolio'), 'getBoundingClientRect').mockReturnValue({ top: 1500 });
    vi.spyOn(container.querySelector('#contact'), 'getBoundingClientRect').mockReturnValue({ top: 2500 });
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(300);
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
    window.dispatchEvent(new Event('scroll'));
    expect(container.querySelector('#nav li.current a').hash).toBe('#about');
    expect(nav.classList.contains('opaque')).toBe(true);
    expect(nav.style.display).toBe('none');
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(375);
    window.dispatchEvent(new Event('resize'));
    expect(nav.style.display).toBe('');
  });

  it('resizes the hero and removes global listeners on unmount', () => {
    const removeWindowListener = vi.spyOn(window, 'removeEventListener');
    const removeDocumentListener = vi.spyOn(document, 'removeEventListener');
    renderApp();
    expect(container.querySelector('header').style.height).toBe(`${window.innerHeight}px`);
    act(() => root.unmount());
    expect(removeWindowListener).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(removeWindowListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    expect(removeDocumentListener).toHaveBeenCalledWith('click', expect.any(Function));
    root = createRoot(container);
  });
});
