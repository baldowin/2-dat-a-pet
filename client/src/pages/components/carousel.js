import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

class Carousel extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <div class="carousel carousel-slider center">
                    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1" /></a>
                    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2" /></a>
                    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3" /></a>
                    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a>
                </div>
            </div>
        )
    }
}

export default Carousel