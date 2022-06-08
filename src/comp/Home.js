import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { url } from './../App'
import axios from 'axios'

function Home() {
    let [can, setCan] = useState([])
 

    async function getdata() {
        let res = await axios.get(url)
        //console.log(res.data)
        setCan(res.data)
        
    }

    useEffect(() => {getdata()}, [])

    async function del(id) {
        await axios.delete(url+'/'+id);
        getdata()
    }

  

    return (<Table bordered className='tab'>
        <thead className='tabi'>
        <tr >
        <th>SI.NO</th>
        <th>Name</th> 
        <th>Age</th>
         <th>Codeword</th>
         <th>Company</th> 
         <th>Value</th> 
         <th>EDIT</th> 
         <th>DELETE</th> 
         </tr> 
         </thead>
         <tbody className='tab'> 
         {
            can.map((e,i) =>{return<tr key={i}>
                <td>{e.id}</td>
                <td>{e.Name}</td>
                <td>{e.age}</td> 
                <td>{e.codeward}</td>
                <td>{e.Company}</td> 
                <td>{e.value}</td>
                <td><Link to={`/editbar/${e.id}`}><Button variant="success" onClick = {() =>(e.id)}>Edit</Button>{' '}</Link></td >
                    <td><Button variant = "danger" onClick = {() => del(e.id)}>Delete</Button>{' '}</td >
                    </tr>
            })
        }
         </tbody> </Table>
    );
}

export default Home;