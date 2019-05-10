import React from 'react';
import SideNav from './components/SideNav/sideNav';
import NavBar from './components/navbar/navbar';
import Card from './components/card/card';
import Footer from './components/footer'
import './dashboard.css'
import API from '../../utils/API'

class Dashboard extends Component {
    state = {
        pets: [],
        associatedpets: [],
    };
    componentDidMount() {
        this.loadPets();
    }
    loadsPets = () => {
        API.getUserPets()
            .then(res => this.setState({ pets: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                < NavBar />
                <div className="row">
                    <div className="col s12">
                        <h3>Your Pets</h3>
                        < Card />
                    </div>
                    <div className="col s12">
                        <h3>Friends Pet</h3>
                        < Card />
                    </div>
                </div>
                < Footer />
            </div>
        )
    }
}
export default Dashboard;