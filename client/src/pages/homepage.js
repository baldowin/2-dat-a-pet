import React from 'react';


function Homepage() {
    // $('.dropdown-trigger').dropdown();
    // $('.carousel.carousel-slider').carousel({
    //     fullWidth: true
    //   });
    return (
     
        <div>
        <script>
        $('.dropdown-trigger').dropdown();
        $('.carousel.carousel-slider').carousel({
            // fullWidth: true
          });
          </script>
            <h1>logo here</h1>
            //-- Dropdown Trigger -->
            <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

            //-- Dropdown Structure -->
            <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">About us</a></li>
            </ul>
            <div className= "carousel carousel-slider">
            <a className= "caraousel-item" href="#one!"><img src="#"></img></a>
            <a className= "caraousel-item" href="#one!"><img src="#"></img></a>
            <a className= "caraousel-item" href="#one!"><img src="#"></img></a>
            <a className= "caraousel-item" href="#one!"><img src="#"></img></a>
            </div>
            <h1>footer here</h1>
        </div>
    )
}

export default Homepage;