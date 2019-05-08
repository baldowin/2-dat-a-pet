import React, {Component} from 'react';

// Import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

class NavbarHome extends Component {
    componentDidMount(){
        M.AutoInit();
    }

    render(){
        return(
            <div>
            <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Log In</a>

            
            <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">About us</a></li>
                <li><a href="#!">Sign Up</a></li>
            </ul>
            </div>
        )
    }
}

export default NavbarHome