import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
         <div className="row">

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 data.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{data.name}</span>
                     <br></br>
       						   <span>
                      {data.address}
                      </span>
                    <br></br>
                    <a href={`${data.url}`} target="_blank" rel="noopener noreferrer">{data.url}</a>
       				    </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}