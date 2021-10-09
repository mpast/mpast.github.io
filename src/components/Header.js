import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a href="CV.pdf" target="_blank noopener">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Work</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hi 👋 I am {data.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {data.role}.{data.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    data.socialLinks && data.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}