import React from 'react';
import './card.css'


function Card(pet) {
    return (
        <div>
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="http://4.bp.blogspot.com/_VmZpep1KUeg/TT-ZYxvRGqI/AAAAAAAAAIA/lInvcvqOkBY/s1600/cute-puppy-dog-wallpapers.jpg" />
                </div>
                <div class="card-content">
                 {console.log("this is inside card")}
                    {console.log(pet.pet.Dog)}
                    <span class="card-title activator grey-text text-darken-4">Card Title<a class="btn-floating btn-large waves-effect waves-light red right"><i class="material-icons">Info</i></a></span>
                    <p><a href="#">{pet.pet.Dog.petName}
                   </a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;