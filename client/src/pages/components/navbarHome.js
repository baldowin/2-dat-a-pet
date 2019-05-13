import React, {Component} from 'react';
import Login from '../components/forms/login/login';


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
                            <h4>Login</h4>
                                < Login/>
                        </div>

                        <div class="modal-footer">
                            {/* <a href="#!" class="modal-close waves-effect waves-green btn-flat" type="submit" name="action">Login In</a>
                            <i class="material-icons right">send</i> */}
                            <button class="modal-close btn waves-effect waves-light" type="submit" name="action">Login
                            <i class="material-icons right">send</i>
                            </button>
                        </div>

                    </div>
                <a class="waves-effect waves-light btn-flat" href="/signup"></a>
            </div>
        )
    }
}

export default NavbarHome