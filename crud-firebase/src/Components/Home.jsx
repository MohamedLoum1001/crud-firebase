import React, { useEffect, useState }  from 'react'

import Heading from './Heading'

import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Table } from 'react-bootstrap/'
import { FaEye } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { db } from "../Firebase/Firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";


const Home = () => {

    const [user, setUser] = useState([])

    useEffect(() => {

        getUsers()

    }, [])
    //recuperation des donnees depuis firebase
    const getUsers = async () => {
        const data = await getDocs(collection(db, "users"));
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };


    //Suppression des donnees depuis firebase
    const Deletehandle = async (id) => {
        console.log({ id })
        await deleteDoc(doc(db, "users", id));
        getUsers()
        alert("delete succees !!!")
    };



    //Recherche des donnees 
    const [query, setQuery] = useState("")
    const keys = ["name", "address", "city", "country"]
    const Searche = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        )
    };
    var donnee = Searche(user)



    return (
        <div>
            <Heading />

            <Form className='mt-3 me-3 d-flex justify-content-end align-items-end'>
                <Form.Group className="mb-3">

                    <Form.Control type="text"
                        name="search"
                        placeholder="Recherchez une personne"
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ fontWeight: "500" }} />
                </Form.Group>
            </Form>



            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pin Code</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        donnee.map((el, index) => (
                            <tr key={el.id}>
                                <td>{index + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.address}</td>
                                <td>{el.city}</td>
                                <td>{el.pinCode}</td>
                                <td>{el.country}</td>

                                <td>
                                    <Link to={`/AfficherUser/${el.id}/${el.name}/${el.address}/${el.city}/${el.pinCode}/${el.country}`} ><FaEye className='btn-btn-success'/></Link> &nbsp; &nbsp;&nbsp; &nbsp;
                                    <Link to={`/UppdateUser/${el.id}/${el.name}/${el.address}/${el.city}/${el.pinCode}/${el.country}`}><BsFillPencilFill className='btn-btn-warning'/></Link>  &nbsp; &nbsp;&nbsp; &nbsp;
                                    <Link onClick={() => Deletehandle(el.id)}> <AiFillDelete className='btn-btn-danger'/></Link>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </Table>


        </div>
    )
}

export default Home
