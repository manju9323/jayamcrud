import {useEffect} from 'react'
import axios from 'axios';
import React,{useState} from 'react';
import {url} from '../App'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form'; 


function EditBar() {
    

    const[Name, setname] = useState("")
    const[age, setage] = useState("")
    const[codeward, setcode] = useState("")
    const[Company, setcompany] = useState("")
    const[value, setvalue] = useState("")
const params=useParams(); 

    const getdata=async()=>{
        let res=await axios.get(url+'/'+params.id)
        console.log(res.data)
setname(res.data.Name)
setage(res.data.age)
setcode(res.data.codeward)
setcompany(res.data.Company)
setvalue(res.data.value)
       }
       
       
         useEffect(()=>{
           getdata()
         },[])

   
    let Submit=async()=>{
      (alert(`are yoy sure want to update:${params.id}`)) 
        await axios.put(`${url}/${params.id}`,{Name,age,codeward,Company,value})
        }
        
    return (
        
        <><div className="tab"><h1>EDIT PROFILE</h1></div>

<div className="pro">
        <Form className="aaa">
        

        <Form.Group className="mb-3 aga" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={Name} placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 aga" >
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={age} placeholder="Enter Age" onChange={(e)=>setage(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3 aga" >
          <Form.Label>Codeword</Form.Label>
          <Form.Control type="text" value={codeward} placeholder="code" onChange={(e)=>setcode(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3 aga">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={Company} placeholder="Company name" onChange={(e)=>setcompany(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 aa">
          <Form.Label>Value</Form.Label>
          <Form.Control type="number" value={value} placeholder="Value" onChange={(e)=>setvalue(e.target.value)}/>
        </Form.Group>
      
      <Form.Check type="checkbox" label="Check me out"/>
      </Form>
      </div>
       <Link to="/home"><Button variant="primary" type="submit" onClick={Submit}>UPDATE </Button> </Link>
        
</>
    );
  }
  
  export default EditBar;
 
  
