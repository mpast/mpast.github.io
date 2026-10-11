import React from 'react';

export default function Portfolio({ data }) {
  return (
    <section id="portfolio" className="section-light">
      <div className="page-width">
        <div className="section-heading"><div><p className="eyebrow section-label">02 / SELECTED WORK</p><h2>Ideas put into practice<span>.</span></h2></div><p>Security, development &amp; data exploration.</p></div>
        <div id="portfolio-wrapper" className="project-grid">{data.portfolio.map((item, index) => <article key={item.name} className="portfolio-item"><a className="project-link" href={item.url} target="_blank" rel="noopener noreferrer"><div className="project-image"><img src={item.imgurl} alt={`${item.name} application preview`} loading="lazy" /><span className="project-number">0{index + 1}</span><span className="project-arrow" aria-hidden="true">↗</span></div><div className="project-info"><h3>{item.name}</h3><p>{item.description}</p><span className="project-source">View project on GitHub <span aria-hidden="true">↗</span></span></div></a></article>)}</div>
      </div>
    </section>
  );
}
