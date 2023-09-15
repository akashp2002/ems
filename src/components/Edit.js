import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import {useNavigate} from 'react-router-dom';


function Edit() {
  // state
  const [id,setId]= useState('')
  const [uname,setUname]= useState('')
  const [desg,setDesg]= useState('')
  const [age,setAge]= useState('')
  const [salary,setSalary]= useState((0))

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setUname(localStorage.getItem("uname"))
    setDesg(localStorage.getItem("desg"))
    setAge(localStorage.getItem("age"))
    setSalary(JSON.parse(localStorage.getItem("salary")))

  },[])
var index = Employee.map(item=>item.id).indexOf(id)
let history= useNavigate()
console.log(index);

const handleUpdate =(e)=>{
  e.preventDefault()
  let emp= Employee[index]
  console.log(emp);
  emp.uname= uname
  emp.age= age
  emp.desg= desg
  emp.salary= salary
console.log(emp);
history('/')
}

  return (
    <>
      <h1 className='text-primary mt-5 ma-3'>Update Employee Details</h1>
    <p className='ms-3 me-3'>
        This is Dummy Data.React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
    </p>
    <Row className='m-5'>
      <Col md={4}>
        <img style={{width:"300px",height:"400px"}} src='https://th.bing.com/th/id/R.6f11a698c46c5f34ad3b2e90c597295f?rik=u7rOHzbf9wG%2b2A&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f2%2fv%2fF%2fE%2fU%2fd%2ficon-contact-16-hi.png&ehk=4pv1I4nYbTP7QXGC6%2bCxylvsjtWIJiMSLMc5HQg6ZZY%3d&risl=&pid=ImgRaw&r=0' alt='no img' />
        </Col>
        <Col md={8}>
        <Form className='border p-2'>
      <Form.Group >
        <Form.Label>Username</Form.Label>
        <Form.Control style={{color:"red"}} value={uname} type="text" 
        onChange={(e=>setUname(e.target.value))}  />
      </Form.Group>
      <Form.Group >
        <Form.Label>Age</Form.Label>
        <Form.Control style={{color:"red"}} value={age} type="text" 
         onChange={(e=>setAge(e.target.value))} />
      </Form.Group>
      <Form.Group >
        <Form.Label>Designation</Form.Label>
        <Form.Control style={{color:"red"}} value={desg} type="text" 
         onChange={(e=>setDesg(e.target.value))}  />
      </Form.Group>
      <Form.Group >
        <Form.Label>Salary</Form.Label>
        <Form.Control style={{color:"red"}} value={salary} type="text" 
         onChange={(e=>setSalary(e.target.value))} />
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)} className='mt-3'  variant="primary" type="submit">
        Update
      </Button>
    </Form>
      </Col>
    </Row>
    </>
  )
}

export default Edit