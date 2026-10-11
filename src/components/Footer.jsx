import React from 'react';

export default function Footer({ data }) {
  return <footer><div className="page-width footer-inner"><a className="brand smoothscroll" href="#home" aria-label={`${data.name}, home`}>mp<span>.</span></a><p>{data.name} <span aria-hidden="true">·</span> {data.address}</p><a className="smoothscroll back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a></div></footer>;
}
