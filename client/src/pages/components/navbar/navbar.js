import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'




class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {

        return (
            <div>
                <nav></nav>

                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                        <div class="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span class="white-text name">John Doe</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons waves-effect waves-light btn">Nav</i></a>

                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Creat-A-Pet</a>

                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Pet Creator</h4>
                        <p>A Form Here</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Confirm</a>
                    </div>
                </div>
                <h4>Dat-A-Pet</h4>
            </div>

        );
    };
};
export default Navbar;