import React, { useState } from 'react';

export default function Header({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="home">
      <a className="skip-link" href="#about">Skip to content</a>
      <nav id="nav-wrap" aria-label="Main navigation">
        <a className="brand smoothscroll" href="#home" aria-label={`${data.name}, home`}>mp<span>.</span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '+'}</span></button>
        <ul id="nav" className={menuOpen ? 'nav is-open' : 'nav'} onClick={() => setMenuOpen(false)}>
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#portfolio">Work</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
          <li><a className="resume-link" href="CV.pdf" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a></li>
        </ul>
      </nav>
      <div className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {data.address}</p>
          <h1 className="responsive-headline">Hi, I’m<br /><span>{data.name}.</span></h1>
          <p className="hero-role">{data.role}</p>
          <p className="hero-description">{data.roleDescription}.</p>
          <div className="hero-actions">
            <a className="button button-primary smoothscroll" href="#portfolio">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button button-outline smoothscroll" href="#contact">Let’s connect <span aria-hidden="true">→</span></a>
          </div>
          <ul className="social">{data.socialLinks.map(item => <li key={item.name}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name === 'linkedin' ? 'LinkedIn' : 'GitHub'} <span aria-hidden="true">↗</span></a></li>)}</ul>
        </div>
        <div className="security-visual" aria-hidden="true">
          <div className="visual-topline"><span>SECURITY × DEVELOPMENT</span><span className="visual-dots">● ● ●</span></div>
          <div className="security-orbit"><div className="orbit-ring ring-two" /><div className="orbit-ring ring-one" /><div className="shield-mark"><svg viewBox="0 0 80 90" fill="none"><path d="M40 5 70 17v26c0 20-15 34-30 42C25 77 10 63 10 43V17L40 5Z" stroke="currentColor" strokeWidth="2" /><path d="m26 44 10 10 20-23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div><span className="orbit-label label-one">Secure development</span><span className="orbit-label label-two">DevSecOps</span><span className="orbit-label label-three">AI</span><span className="orbit-point" /></div>
          <div className="visual-bottomline"><span>Built with a security mindset.</span><span>01 / 03</span></div>
        </div>
      </div>
      <div className="hero-bottom page-width"><span>Security. Code. Curiosity.</span><a className="smoothscroll" href="#about">Get to know me <span aria-hidden="true">↓</span></a></div>
    </header>
  );
}
