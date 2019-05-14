import React, { Component } from 'react';
// import SideNav from './components/SideNav/sideNav';
import NavBar from './components/navbar/navbar';
import Card from './components/card/card';
import Footer from './components/footer'
import './dashboard.css'
import API from '../utils/API'
import { Route, Redirect } from 'react-router';

class Dashboard extends Component {
    state = {
        pets: [],
        associatedpets: []
    };

    componentDidMount() {
        this.loadPets();
    }
    loadPets = () => {
        API.getUserPets()
            .then(res => {
                let petsState = res.data.Pet;
                API.getUserAssociatedPets()
                    .then(res => {
                        this.setState({ pets: petsState, associatedpets: res.data.Pets });

                    }
                    )
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    };

    render() {
        if (this.state.pets === undefined) {
            return <Redirect to="/" />
        }
        return (
            <div>
                < NavBar />
                <div>
                    {this.state.pets.length ? (
                        <div>
                            <h3>Your Pets</h3>
                            <hr></hr>
                            <div className="row">
                                <div className="col s12" id="my-pet-wrapper">
                                    {this.state.pets.map(pet => (
                                        <Card pet={pet} />
                                    ))}
                                </div>
                            </div>
                        </div>


                    ) : (
                            <div>
                                <h3>Your Pets</h3>
                                <hr></hr>
                                <h3>No Results to Display</h3>
                            </div>
                        )}

                    {this.state.associatedpets.length ? (
                        <div>
                            <h3>Friends Pets</h3>
                            <hr></hr>
                            <div className="row">
                                <div className="col s12" id="my-pet-wrapper">
                                    {this.state.associatedpets.map(pet => (
                                        <Card pet={pet} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <h3>Friends Pets</h3>
                                <hr></hr>
                                <h3>No Results to Display</h3>
                            </div>
                        )}
                    )}
                </div>

                < Footer />
            </div>

        )
    }
}
export default Dashboard;