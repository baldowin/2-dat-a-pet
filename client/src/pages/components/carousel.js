import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';
import stepone from "../components/images/stepone.png";
class Slider extends Component {
    componentDidMount() {
        //M.AutoInit();
        M.Slider.init(this.slider)
    }

    render() {
        return (
            
            <div className="slider" ref={(slider) => {this.slider=slider}}>
            <ul className="slides">
                <li>
                    <img src="https://lorempixel.com/580/250/nature/2"/>
                    <div class="caption left-align">
                    <h3>Step 2: Create an Account</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src= {stepone}/>
                    <div class="caption center-align black-text">
                        <h3>Step 2: Sign in</h3>
                        <h5 class="black-text text-lighten-3 center-align">Input the email and password used to create your Dat-A-Pet account</h5>
                    </div>
                </li>
                <li>
                    <img src="https://lorempixel.com/580/250/nature/3"/>
                    <div class="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="https://lorempixel.com/580/250/nature/4"/>
                    <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
            </ul>
          </div>

            /* // <div>
            //     <div class="carousel carousel-slider center">
            //         <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1" /></a>
            //         <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" /></a>
            //         <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" /></a>
            //         <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a>
            //     </div>
            // </div> */
        )
    }
}

export default Slider;