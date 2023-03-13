import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from "../Firebase/Firebase";
import { updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { Form, Button } from 'react-bootstrap/'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const UppdateUser = () => {

    const { id, fname, faddress, fcity, fpinCode, fcountry } = useParams();
    //  console.log(id )
    //  console.log(fname )
    //  console.log(faddress)
    //  console.log(fpinCode)
    //  console.log(fcountry )


    const [user, setUser] = useState({
        name: fname,
        address: faddress,
        city: fcity,
        pinCode: fpinCode,
        country: fcountry,
    });
    const { name, address, city, pinCode, country } = user;
    console.log(user)


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "users", id), { ...user });
        alert("Utilisateur Modifier avec succés !!!")
        setUser({
            name: "",
            address: "",
            city: "",
            pinCode: "",
            country: ""
        })
    }
    const onAnuller = () => {
        setUser({
            name: "",
            address: "",
            city: "",
            pinCode: "",
            country: ""
        })
    }


    return (
        <div >
            <div className='py-2 px-5 bg-light' style={{ Width: "auto" }}>
                <h1>Modifier un utilisateur</h1>
            </div>
            <Link to="/" className='btn btn-primary px-3 py-2 mt-2 mx-3'>  <AiOutlineArrowLeft /></Link>

            <Form style={{ maxWidth: "500px", margin: "0px auto" }}>
                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "700" }}>Name</Form.Label>
                    <Form.Control type="text"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        style={{ fontWeight: "500" }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "700" }}>Address</Form.Label>
                    <Form.Control type="text"
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                        style={{ fontWeight: "500" }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "700" }}>City</Form.Label>
                    <Form.Control type="text"
                        name="city"
                        value={city}
                        onChange={e => onInputChange(e)}
                        style={{ fontWeight: "500" }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "700" }}>Pin Code</Form.Label>
                    <Form.Control type="text"
                        name="pinCode"
                        value={pinCode}
                        onChange={e => onInputChange(e)}
                        style={{ fontWeight: "500" }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "700" }}>Country</Form.Label>
                    <Form.Control type="text"
                        name="country"
                        value={country}
                        onChange={e => onInputChange(e)}
                        style={{ fontWeight: "500" }} />
                </Form.Group>
                <Button onClick={onSubmit} className="btn btn-warning px-3 py-2 text-light">Modifier</Button>
                <Button onClick={onAnuller} className="btn btn-danger mx-1 px-3 py-2">Annuler</Button>
            </Form>
        </div>

    )
}

export default UppdateUser

