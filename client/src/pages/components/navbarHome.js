import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

class NavbarHome extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div>

                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Log in</a>


                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Log in</h4>
                        <p>Form here</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarHome