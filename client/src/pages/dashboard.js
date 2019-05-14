import React, { Component } from 'react';
// import SideNav from './components/SideNav/sideNav';
import NavBar from './components/navbar/navbar';
import Card from './components/card/card';
import Footer from './components/footer'
import './dashboard.css'
import API from '../utils/API'

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
        return (
            <div>
                < NavBar />
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
                    <h3>No Results to Display</h3>
                )}



                        {/* < Card pets={this.state.pets} /> */}
                    {/* <div className="col s12">
                        <h3>Friends Pet</h3>
                        < Card pets={this.state.associatedPets} />
                    </div> */}
                < Footer />
            </div>
        )
    }
}
export default Dashboard;