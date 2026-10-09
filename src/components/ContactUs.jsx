import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <div className="lead">
              <h4>
                Let’s create your next<br></br>
                experience together</h4>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.socialLinks.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul> 
              </div>
            </div>
          </div>
        </section>
        );
  }
}