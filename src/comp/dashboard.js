import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { url } from './../App'


function Dashboard() {


  let [len,setLen] =useState([])


  async function getdata() {
    let res = await axios.get(url)
    setLen(res.data.length)
}
useEffect(() => {getdata()}, [])


  return (
<div className="green">
<div className='total'>TOTAL CANDIDATE</div>
<div className='len'>{len}</div>
    </div>
  )
}

export default Dashboard;