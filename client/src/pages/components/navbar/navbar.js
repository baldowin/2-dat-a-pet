import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import Addapet from '../forms/addapet/addapet';
import API from '../../../utils/API'



class Navbar extends Component {
    state = {
        user: [],
    };
    componentDidMount() {
        this.userinfo();
        M.AutoInit();
    }
    userinfo = () => {
        // console.log(req.body);
        API.getUser()
            .then(res =>{this.setState({ user: res.data});
            console.log("api call");
             console.log(res.data);
    }
            )
            .catch(err => console.log(err));
    };
    render() {
        
        return (
            <div>
                <nav></nav>

                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                        </div>
                        <a><img className="circle" src="https://tse1.mm.bing.net/th?id=OIP.6x2wSd_m2DxQzKFCZbcLFQHaHR&pid=Api&P=0&w=183&h=181" /></a>
                        <a><span className="black-text name">{this.state.user.ownerName}</span></a>
                        <a><span className="black-text email">{this.state.user.UserEmail}</span></a>
                        <a><span className="black-text email">{this.state.user.phone}</span></a>
                    </div></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons waves-effect waves-light btn">Nav</i></a>

                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Creat-A-Pet</a>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Pet Creator</h4>
                                < Addapet/>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Confirm</a>
                    </div>
                </div>
                <h4>Dat-A-Pet</h4>
            </div>

        );
    };
};
export default Navbar;