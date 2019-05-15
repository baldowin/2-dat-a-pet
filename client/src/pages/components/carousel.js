import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';
import joe from "../components/images/joe.png";
import jenn from "../components/images/jenn.png";
import seven from "../components/images/seven.png";
import tomas from "../components/images/tomas.png";

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
                    <img src={joe}/>
                    <div class="caption left">
                    <h3>Step 1: Create an Account</h3>
                    <h5 class="light grey-text text-lighten-3 left-align">It's simple and easy to get started!</h5>
                    </div>
                </li>
                <li>
                    <img src= {tomas}/>
                    <div class="caption center-align">
                        <h3>Step 2: Login in</h3>
                        <h5 class="light grey-text text-lighten-3 center-align">Input the email and password used to create your Dat-A-Pet account</h5>
                    </div>
                </li>
                <li>
                    <img src={seven}/>
                    <div class="caption left-align">
                    <h3>Add a Pet</h3>
                    <h5 class="light grey-text text-lighten-3 left-align">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src={jenn}/>
                    <div class="caption center-align">
                    <h3>Share your pet's info with someone else</h3>
                    <h5 class="light grey-text text-lighten-3">Pet Sitters, Family Members, Spouses, the possibilities are endless! Just type in their email in authorized users and your all</h5>
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