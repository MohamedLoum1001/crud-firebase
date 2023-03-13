import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap/'
import {db} from "../Firebase/Firebase";
import {addDoc, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const AddUser = () => {

  const[show,setShow]=useState(false);
  const[data,setData]=useState({
    name:"",
    address:"",
    city:"",
    code:"",
    country:""
  })
  const{name,address,city,code,country}=data
  

  const handelchange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
 
  }
  const  handelecoute=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    ecouteur ()
  }
  
  
  //if((data.name!=null) && (data.address!= null) && (data.city!=null) && (data.code!= null)  && (data.country!= null)) 
 const ecouteur =()=>{
  if ((data.name!="") && (data.address!="") && (data.city!="") && (data.code!="")  && (data.country!="")) {
  //  console.log(data)
  //  console.log(show)
 if(show==false){
  setShow(!show);
 }
 
}
else if ((data.name === "") || (data.address === "") || (data.city === "") || (data.code === "") ||(data.country === "")){
  // console.log(data)
  // console.log(show)
  if(show==false){
    setShow(show);
  }
  else {
    setShow(!show);
  }

}

 }

 

const onSubmit = (e)=>{
 e.preventDefault();
 if ((data.name === "") || (data.address === "") || 
    (data.city === "") || (data.code === "") ||
    (data.country === "")){
  // console.log(data)
  // console.log(show)
 // setShow(!show);
  alert("Veillez saisir toute les champs svp !")
}
else{
 addDoc(collection(db,"users"),{
      
    name:data.name,
    address:data.address,
    city:data.city,
    pinCode:data.code,
    country:data.country
  })
  alert("insertion avec succées")
  setData({
    name:"",
    address:"",
    city:"",
    code:"",
    country:""
  })
}
 }
   const onAnulle =()=>{
    setData({
      name:"",
      address:"",
      city:"",
      pinCode:"",
      country:""
    })
  }


  
  return (
    <div >

      <Link to="/" className='btn btn-primary px-3 mt-2 mx-3'> <AiOutlineArrowLeft/></Link> 
    
    <Form style={{maxWidth:"500px",margin:"0px auto"}}>
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"700"} }>Name</Form.Label>
        <Form.Control type="text"
         name="name"
        onChange={handelchange}
        value={name}
        onKeyUp={handelecoute}
           style={{fontWeight:"500"} } />
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"700"} }>Address</Form.Label>
        <Form.Control  type="text" 
        name="address"
         onChange={handelchange}
         onKeyUp={handelecoute}
        value={address}
          style={{fontWeight:"500"} } />
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"700"} }>City</Form.Label>
        <Form.Control  type="text"
         name="city" 
        onChange={handelchange}
        value={city} 
        onKeyUp={handelecoute}
        style={{fontWeight:"500"} } />
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"700"} }>Pin Code</Form.Label>
        <Form.Control type="text" name="code"
         onChange={handelchange}
        value={code}
        onKeyUp={handelecoute}
         style={{fontWeight:"500"} } />
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label style={{fontWeight:"700"} }>Country</Form.Label>
        <Form.Control type="text" 
        name="country"
        onChange={handelchange}
        value={country}
        onKeyUp={handelecoute}
        style={{fontWeight:"500"} } />
      </Form.Group>
    <Button onClick={onSubmit} className={!show ? 'disabled' : null }  >Ajouter</Button>
    <Button onClick={onAnulle} className="btn btn-danger ms-2">Annuler</Button>
 
    {/* className={!show ? 'disabled' : null } */}

    </Form>
    </div>
    
    
      
 
  )
}

export default AddUser
