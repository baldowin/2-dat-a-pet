import React, { Component } from 'react';
// import SideNav from './components/SideNav/sideNav';
import NavBar from './components/navbar/navbar';
import Card from './components/card/card';
import Footer from './components/footer'
import './dashboard.css'
import API from '../utils/API'
import {Route,Redirect} from 'react-router';

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
            .then(res => {
                console.log(res.data)
                let petsState = res.data.Pet;
                // console.log("api call"),
                //  console.log(res.data.Pet),
                API.getUserAssociatedPets()
                    .then(res => {
                        console.log(res.data);
                        this.setState({ pets: petsState, associatedpets: res.data.Pets });
                        
                    }
                    )
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    };

    render() {
        if (this.state.pets===undefined){
            return <Redirect to="/"/>
        }
        return (
            <div>
                < NavBar />
                <div>
                {this.state.pets.length ? (
                    <div>
                        <h3>Your Pets</h3>
                        <div className="row">
                            <div className="col s12" id="my-pet-wrapper">
                                {this.state.pets.map(pet => (
                                    <Card pet={pet} />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h3>No Results to Display</h3>
                )}
                </div>

                <div className="col s12">
                    {console.log(this.state.associatedpets)}
                    {this.state.associatedpets.length ? (
                        <h3>Friends Pet</h3>
                        ,
                        this.state.associatedpets.map(pet => (
                            <Card pet={pet} />
                            ))
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
                < Footer />
            </div>
        )
    }
}
export default Dashboard;