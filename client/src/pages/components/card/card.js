import React from 'react';
import './card.css'



function Card(pet) {
    let neuteredValue;
   if(pet.pet.Dog.neuetered === true){
neuteredValue = "true"
   }else{
       neuteredValue = "false"
   }
    return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://4.bp.blogspot.com/_VmZpep1KUeg/TT-ZYxvRGqI/AAAAAAAAAIA/lInvcvqOkBY/s1600/cute-puppy-dog-wallpapers.jpg" />
                </div>
                <div className="card-content">
                 {console.log("this is inside card")}
                    {console.log(pet.pet.Dog)}
                    <span className="card-title activator grey-text text-darken-4">{pet.pet.Dog.petName}<a class="btn-floating waves-effect waves-light red right"><i class="material-icons">+</i></a></span>
                    <a class="waves-effect waves-light btn">Update</a>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Pet Info<i class="material-icons right">close</i></span>
                <br></br>
                    <ul className="collection">
                        <li className="collection-item">birth Year: {pet.pet.Dog.birthYear}</li>
                        <li className="collection-item">Gender: {pet.pet.Dog.gender}</li>
                        <li className="collection-item">Breed: {pet.pet.Dog.petSubtype}</li>
                        <li className="collection-item">Neutered: {neuteredValue}</li>
                    </ul>
                    
                    {console.log(pet.pet.Dog.birthMonth)}
                </div>
            </div>
        
    )
}

export default Card;