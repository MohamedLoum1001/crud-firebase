import React, { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SousAfficher from './SousAfficher'

const AfficheUser = () => {

    const {id,name,address,city,pinCode,country} = useParams();
    console.log(id)
    console.log(name)
    console.log(address)
    console.log(pinCode)
    console.log(country)

    const[user]= useState({
        id:id,
        name:name,
       address:address,
        city:city,
        pinCode:pinCode,
        country:country
       });
   
     
  return (
    <div>
         <div className='px-5 bg-light'>
        <h1  className='py-2'>Afficher un utilisateur</h1>
        </div>
         <Link to="/" className='btn btn-primary mx-3'> <AiOutlineArrowLeft /></Link> 
       <SousAfficher id={user.id} name ={user.name}
                      address ={user.address}
                      city={user.city}
                     pinCode ={user.pinCode} 
                     country={user.country}
                     />
    </div>
  )
}

export default AfficheUser

