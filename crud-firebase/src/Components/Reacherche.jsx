import React from 'react'
import { Form } from 'react-bootstrap'

const Recherche = () => {
  return (
    <Form className='mt-5' style={{maxWidth:"500px",margin:"0px auto"}}>
      <Form.Group className="mb-3">
    
        <Form.Control type="text" name="search" placeholder="Search..." style={{fontWeight:"500"} } />
      </Form.Group>
    </Form>
  )
}

export default Recherche
