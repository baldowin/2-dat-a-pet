import React from 'react';
import NavbarHome from '../pages/components/navbarHome'
import Carousel from '../pages/components/carousel'
import Footer from '../pages/components/footer'
import Logo from '../pages/components/logo/logo'
import './homepage.css'




function Homepage() {
    return (
     
        <div>
            
            <div>
            <div className="row">
                <div class="col s12">
                <Logo />
                <NavbarHome />
                 <Carousel />   
                </div>
            </div>
            
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;