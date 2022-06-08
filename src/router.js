import React from 'react';
//import useState from 'react';
import Home from './comp/Home';
import Profile from './comp/pro';
import EditBar from './comp/edit';
import {Route} from 'react-router-dom';
import Dashboard from './comp/dashboard';
//export const AlContext=React.createContext();


function Rout() {

// let [fam,setFam]=useState([{name:"Manjunathan M",age:27,work:"fsd",passion:"sports",fav:"apjkalam",},{name:"Munusamy g",age:57,work:"Farmer",passion:"sports",fav:"apjkalam",},{name:"Gopinath",age:30,work:"film",passion:"chess",fav:"sakthiman",},{name:"jayanthi m",age:47,work:"VAO",passion:"good",fav:"sivaji",},{name:"esaivani m",age:20,work:"fassion designer",passion:"sports",fav:"apjkalam"}]);  <AlContext.Provider value={{fam,setFam}}> </AlContext.Provider>

  return (
  

    <div className="main">
  
            <Route className="tab" path="/dashboard" component={Dashboard}/>
            <Route className="tab" path="/home" component={Home}/>
            <Route className="ta" path="/profile" component={Profile}/>
            <Route className="ta" path="/editbar/:id" component={EditBar}/>
           
       
  </div>

 
 

     
  )
}
export default Rout;
