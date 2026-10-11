import React from 'react';

export default function About({ data }) {
  return (
    <section id="about" className="section-light">
      <div className="page-width about-grid">
        <div><p className="eyebrow section-label">01 / ABOUT</p><h2>A developer’s perspective.<br /><span>A security mindset.</span></h2><p className="about-copy">{data.aboutme}</p></div>
        <aside className="about-details"><p className="eyebrow">THE DETAILS</p><h3>{data.name}</h3><p>{data.address}</p><a href={data.url} target="_blank" rel="noopener noreferrer">mpast.github.io <span aria-hidden="true">↗</span></a><div className="expertise"><p className="eyebrow">AREAS OF FOCUS</p><ul>{data.skills.map(skill => <li key={skill.skillname}>{skill.skillname}</li>)}</ul></div></aside>
      </div>
    </section>
  );
}
