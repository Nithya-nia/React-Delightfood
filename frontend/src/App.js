
import Home from './Pages/Home'
import Snacks from './Pages/Snacks'
import Sweet from './Pages/Sweet'
import Pickel from './Pages/Pickel'
import Login from './Pages/Login'
 import Signup from './Pages/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sweets' element={<Sweet/>}/>
      <Route path='/Snacks' element={<Snacks/>}/>
      <Route path='/Pickel' element={<Pickel/>}/>
      <Route path='/Login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/> 
    </Routes>
    </BrowserRouter>

  
    


    </>
     
    
  )
};

 
export default App;
