import axios from 'axios';
import React from 'react';
import {url} from './../App'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';


function Profile() {


 
let handleSubmit = async(values)=>{
  await axios.post(url,values)
  
}

const formik = useFormik({
  initialValues:{
  Name:'',
  age:'',
  codeward:'',
  Company:'',
  value:'',
},
validationSchema:yup.object({
  Name:yup.string().required('* Required'),
  age:yup.number('enter number format').required('* Required').min(1,"not less than 1").max(100,"not greater than 100"),
 codeward:yup.string().required('* Required'),
 Company:yup.string().required('* Required'),
 value:yup.number('Enter Number Format').required('* Required').min(1,"not less than 1").max(100,"not greater than 100")
}),


onSubmit:values=>{
handleSubmit(values)
alert("submited")
} 

})
//-----------------------------------------------------
    return (
      <div className="pass">
        <div className="p">
        <div className="tab"><h1>ADD NEW PROFILE (FORMIC/*)</h1></div>
        <form onSubmit={formik.handleSubmit} className=''>
        <div className='form-group'>
          <label for="Name">Name</label>
         < div>
           <input id="Name"
          name="Name" 
          type="text" 
          className="form-control" 
          placeholder="Enter Name" 
          onBlur={formik.handleBlur}  
          onChange={formik.handleChange} 
          value={formik.values.Name}  
          /></div> 
          {formik.touched.Name && formik.errors.Name ? <div style={{color:"red"}}>{formik.errors.Name}</div>:null}
        </div>
    </form>
 
    <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label for="Age">Age</label>
         <div>
           <input id="age" 
            name="age" 
            type="age" 
            className="form-control"  
            placeholder="Enter age" 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            value={formik.values.age} 
            /></div> 
          {formik.touched.age && formik.errors.age ? <div style={{color:"red"}}>{formik.errors.age}</div>:null}
        </div>
    </form>


    <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label for="codeward">Codeward</label>
         <div>
           <input id="codeward" 
            name="codeward"  
            type="codeward" 
            className="form-control"
            placeholder="Enter codeward" 
             onBlur={formik.handleBlur} 
          onChange={formik.handleChange}
          value={formik.values.codeward}/></div> 
          {formik.touched.codeward && formik.errors.codeward ? <div style={{color:"red"}}>{formik.errors.codeward}</div>:null}
        </div>
    </form>


    <form onSubmit={formik.handleSubmit} >
        <div className='form-group'>
          <label for="Company">Company</label>
         <div>
           <input id="Company" 
           name="Company" 
           type="Company" 
           className="form-control" 
           placeholder="Enter Company Name" 
           onBlur={formik.handleBlur} 
           onChange={formik.handleChange}
           value={formik.values.Company}
          /></div> 
          {formik.touched.Company && formik.errors.Company ? <div style={{color:"red"}}>{formik.errors.Company}</div>:null}
        </div>
    </form>

    <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label for="value">Value</label>
         <div>
           <input id="value"  
           name="value"  
           type="value" 
           className="form-control"
           placeholder="Enter value" 
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.value}  
          /></div> 
          {formik.touched.value && formik.errors.value ? <div style={{color:"red"}}>{formik.errors.value}</div>:null}
        </div>
        
       
        <div className="form-group">
        <Button variant="primary" type="submit" >
           SUBMIT 
           </Button>
           <Link to="/home"><Button className="si" variant="primary" type="submit" >
          TO HOME
           </Button></Link>
           </div>
           </form>
      </div>   
      </div>
    );
}

  export default Profile;
  