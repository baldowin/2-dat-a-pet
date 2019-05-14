import React from 'react';
import './card.css'


function Associatedpets(pet) {
    return (
        <div>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://4.bp.blogspot.com/_VmZpep1KUeg/TT-ZYxvRGqI/AAAAAAAAAIA/lInvcvqOkBY/s1600/cute-puppy-dog-wallpapers.jpg" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{pet.pet.Dog.petName}<a class="btn-floating btn-large waves-effect waves-light red right"><i class="material-icons">Info</i></a></span>
                    <a class="waves-effect waves-light btn">Update</a>
                    <a class="waves-effect waves-light btn">Delete</a>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Pet Info<i class="material-icons right">close</i></span>
                <br></br>
                    <ul className="collection">
                        <li className="collection-item">birth Year: {pet.pet.Dog.birthYear}</li>
                        <li className="collection-item">Gender: {pet.pet.Dog.gender}</li>
                        <li className="collection-item">Breed: {pet.pet.Dog.petSubtype}</li>
                        <li className="collection-item">Neutered: {pet.pet.Dog.neutered}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Associatedpets;