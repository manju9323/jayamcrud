import './index.css'

//import Profile from './comp/profile'
//import Sidebar from './comp/sidebar';
import Nav from './Nav'
import Rout from './router'
import {BrowserRouter as Router} from 'react-router-dom'
export const url='https://62906aa5665ea71fe131ef7a.mockapi.io/candidate';
function App() {

 
  return (
    <div className="containe">
<Router>
    <Nav/>
    <Rout/>
</Router>
     </div>
  )
}

export default App