import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Registration(){

  let navigator=useNavigate();

  let gotoLogin=()=>{
    navigator("/login")
  }

  return (
    <div>
        <h1>Registration page</h1>
        <div className='container p-5 me-5 ms-5 border mb-5'>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="enter password" />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Confirm password</Form.Label>
        <Form.Control type="password" placeholder="enter password" />
      </Form.Group>
      <br/>
      <Button variant="warning">Submit</Button>
      <h4 
      className="mt-3"
      style={{cursor:"pointer"}}
      onClick={gotoLogin}
      > Already have an account.. Login here !!</h4>
      </Form>
        </div>   
    </div>
  )
}

export default Registration