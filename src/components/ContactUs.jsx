import React from 'react';

export default function ContactUs({ data }) {
  return (
    <section id="contact">
      <div className="page-width contact-grid"><div><p className="eyebrow section-label">03 / GET IN TOUCH</p><h2>Let’s create your<br />next experience<br /><span>together.</span></h2></div><div className="contact-links"><p>Have something in mind?<br />Let’s start a conversation.</p><a href={`mailto:${data.contactEmail}`} className="email">{data.contactEmail} <span aria-hidden="true">↗</span></a><ul>{data.socialLinks.map(link => <li key={link.name}><a target="_blank" rel="noopener noreferrer" href={link.url}>{link.name === 'linkedin' ? 'LinkedIn' : 'GitHub'} <span aria-hidden="true">↗</span></a></li>)}</ul></div></div>
    </section>
  );
}
