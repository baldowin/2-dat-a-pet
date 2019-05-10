import React from 'react';
import SideNav from './components/SideNav/sideNav';
import NavBar from './components/navbar/navbar';
import Card from './components/card/card';
import Footer from './components/footer'
import './dashboard.css'


function Dashboard() {
    return (
        <div>
            < NavBar/>
            <div className="row">
                <div className="col s12">
                    <h3>Your Pets</h3>
                    <hr></hr>
                </div>
                <div className="col s12">
                    <h3>Friends Pet</h3>
                </div>
            </div>
            < Footer/>
        </div>
    )
}

export default Dashboard;