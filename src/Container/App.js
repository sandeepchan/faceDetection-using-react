import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Components/Navigation/Navigation'
import Logo from '../Components/Logo/Logo'
import ImageLink from '../Components/ImageLink/ImageLink'
import Rank from '../Components/Rank/Rank'

import './App.css';
const particle={
  
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800
      }

    }
  }
}
class App extends Component
{
  render() {
    return(
      <div className="App">
        <Particles className="particle" params={particle} />
        <Navigation/>
        <Logo />
        <Rank/>
        <ImageLink />
        
        {/* <FaceRecoginition /> */}

      </div>
    )
  }
}

export default App;
