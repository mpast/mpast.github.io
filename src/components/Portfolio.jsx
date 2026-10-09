import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="portfolio">
      <div className="row">
          <h1>Check out some of my work</h1>
          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
          {
            data.portfolio && data.portfolio.map((item)=>{
              return(
                <div key={`${item.name}`} className="columns portfolio-item">
                  <div className="item-wrap">
                    <img src={`${item.imgurl}`} className="item-img" alt="work"/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.description}</h5>
                      </div>
                    </div>
                  </div>
                  <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
                    <h4>{item.name}</h4>
                  </a>
                </div>
              )
            })
          }
          </div>
      </div>
  </section>
        );
  }
}