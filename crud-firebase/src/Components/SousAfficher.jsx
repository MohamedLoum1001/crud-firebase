import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SousAfficher = (props) => {

    return (

        <Container fluid>

            <Row>
                <Col md={4} style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center"
                }}>
                    <h1 style={{
                        fontSize: "40px",
                        opacity: "1"
                    }} >Id: <span style={{
                        fontSize: "25px",
                        opacity: "0.6",
                        backgroundColor: "yellow"
                    }}>{props.id}</span> </h1>

                </Col>
                <Col md={8}>
                    <div className='card mb-4'>
                        <div className='card-body'>


                            <ul className='list-group'>
                                <li className='list-group-item'>

                                    <p style={{
                                        fontSize: "22px", fontWeight: "500",
                                        opacity: "1"
                                    }} >name : <span style={{
                                        fontSize: "30px",
                                        opacity: "0.6"
                                    }}>  {props.name} </span> </p>
                                </li>

                                <li className='list-group-item'>
                                    <p style={{
                                        fontSize: "22px", fontWeight: "500",
                                        opacity: "1"
                                    }} >Address:<span style={{
                                        fontSize: "30px",
                                        opacity: "0.6"
                                    }}>  {props.address} </span> </p>

                                </li>

                                <li className='list-group-item'>
                                    <p style={{
                                        fontSize: "22px", fontWeight: "500",
                                        opacity: "1"
                                    }} > City : <span style={{
                                        fontSize: "30px",
                                        opacity: "0.6"
                                    }}>   {props.city}</span> </p>



                                </li>

                                <li className='list-group-item'>
                                    <p style={{
                                        fontSize: "22px", fontWeight: "500",
                                        opacity: "1"
                                    }} > Code Pin : <span style={{
                                        fontSize: "30px",
                                        opacity: "0.6"
                                    }}> {props.pinCode} </span> </p>



                                </li>

                                <li className='list-group-item'>

                                    <p style={{
                                        fontSize: "22px", fontWeight: "500",
                                        opacity: "1"
                                    }} >  Country : <span style={{
                                        fontSize: "30px",
                                        opacity: "0.6"
                                    }}>  {props.country} </span> </p>

                                </li>
                            </ul>
                        </div>

                    </div>
                </Col>
            </Row>

        </Container>


    )
}

export default SousAfficher
