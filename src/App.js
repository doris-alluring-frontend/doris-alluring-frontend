import {Route, Routes} from 'react-router-dom';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import Homepage from "./homepage/Homepage";
import Product from './product/Product';
import ForgotPassword from './authentication/ForgotPassword';

// let query = matchMedia("(max-width: 600px)");
// console.log(query.matches);
function App() {
  return <>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/' element={<Homepage />} />
      <Route path='/product' element={<Product />} />
    </Routes>
  </>
}


export default App;