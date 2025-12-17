
import Home from './Pages/Home'
import Snacks from './Pages/Snacks'
import Sweet from './Pages/Sweet'
import Pickel from './Pages/Pickel'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Masala from './Pages/Masala'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cartpage from './Pages/Cart'
import Upload from './Pages/Upload'
import Get from './Pages/Getproduct'
import Snackedit from './Pages/Edit'
import ProtectedRoute from './Pages/ProctedRoute'
import Form from './Pages/Validation'
import Fetchfile from './Pages/Singlecrud'
function App() {
  return (
    <>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
        <Home/>

        </ProtectedRoute>
        }></Route>
      <Route path='/sweets' element={
        <ProtectedRoute >
           <Sweet/>
        </ProtectedRoute>
       }/>
      <Route path='/Snacks' element={
          <ProtectedRoute >
               <Snacks/>
          </ProtectedRoute>
       
         
        }/>
      <Route path='/Pickel' element={
         <ProtectedRoute >
            <Pickel/>
         </ProtectedRoute>
        
        
        }/>
      <Route path='/Login' element={
       
          <Login/>
       
        }/>
      <Route path='/Signup' element={
      
           <Signup/>
        
        }/> 
      <Route path='/masala' element={
       <ProtectedRoute >
          <Masala/>
       </ProtectedRoute>
          
          
        }/>
      <Route path='/cart' element={
        
          <Cartpage/>
         
        }/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/getproducts' element={<Get/>}/>
      <Route path='/Editproducts/:id' element={<Snackedit/>}/>
      <Route path='/validation' element={<Form/>}/>
      <Route path='/singlecrud' element={<Fetchfile/>}/>
    </Routes>
    </BrowserRouter>

    


  
    


    </>
     
    
  )
};

 
export default App;
