
import axios from 'axios';
import React,{useState} from 'react';
import {url} from './../App'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 


function Profile() {


  
 const[Name, setname] = useState("")
 const[age, setage] = useState("")
 const[codeward, setcode] = useState("")
 const[Company, setcompany] = useState("")
 const[value, setvalue] = useState("")

let handleSubmit=async()=>{
await axios.post(url,{Name,age,codeward,Company,value})

}


    return (
        <>
    <div className="pro">
        <Form className="aaa">
        

        <Form.Group className="mb-3 aaa" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 aaa" >
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter Age" onChange={(e)=>setage(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3 aaa" >
          <Form.Label>Codeword</Form.Label>
          <Form.Control type="text" placeholder="code" onChange={(e)=>setcode(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3 aaa">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company name" onChange={(e)=>setcompany(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 aaa">
          <Form.Label>Value</Form.Label>
          <Form.Control type="number" placeholder="Value" onChange={(e)=>setvalue(e.target.value)}/>
        </Form.Group>
      
      <Form.Check type="checkbox" label="Check me out"/>
      </Form>
      </div>
      <Link to="/home">  <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button></Link>
      
      </>
    );
  };

  export default Profile;
  