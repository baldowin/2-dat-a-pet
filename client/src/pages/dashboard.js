import React, { Component } from 'react';
// import SideNav from './components/SideNav/sideNav';
import NavBar from './components/navbar/navbar';
import Card from './components/card/card';
import Footer from './components/footer'
import './dashboard.css'
import API from '../utils/API'
import {Route,Redirect} from 'react-router'

class Dashboard extends Component {
    state = {
        pets: [],
        associatedpets: []
    };
    componentDidMount() {
        this.loadPets();
    }
    loadPets = () => {
        // console.log(req.body);
        API.getUserPets()
            .then(res =>this.setState({ pets: res.data.Pet }),
            // console.log("api call"),
            //  console.log(res.data.Pet),
            
            )
            .catch(err => console.log(err));
        // API.getUserAssociatedPets('TEST@email.com')
        //     .then(res => this.setState({ pets: res.data }))
        //     .catch(err => console.log(err));
    };

    render() {
        if (this.state.pets===undefined){
            return <Redirect to="/"/>
        }
        return (
            <div>
                < NavBar />
                <div className="row">
                    <div className="col s12">
                        
                        {this.state.pets.length ? (
                            <h3>Your Pets</h3>
                            ,
                            this.state.pets.map(pet => (
                                <Card pet={pet} />
                            ))
                        ) : (
                                <h3>No Results to Display</h3>
                            )}



                        {/* < Card pets={this.state.pets} /> */}
                    </div>
                    {/* <div className="col s12">
                        <h3>Friends Pet</h3>
                        < Card pets={this.state.associatedPets} />
                    </div> */}
                </div>
                < Footer />
            </div>
        )
    }
}
export default Dashboard;