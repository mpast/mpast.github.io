import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import data from './yourdata';
import { initializeSiteInteractions } from './siteInteractions';
class App extends Component {
  componentDidMount() {
    this.cleanupInteractions = initializeSiteInteractions();
  }

  componentWillUnmount() {
    this.cleanupInteractions();
  }

  render() {
    return (
      <div className="App">
        <Header data={data}/>
        <About data={data}/>
        <Portfolio data={data}/>
        <ContactUs data={data}/>
        <Footer data={data}/>
      </div>
    );
  }
}

export default App;