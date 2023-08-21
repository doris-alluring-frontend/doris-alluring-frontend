import {Route, Routes} from 'react-router-dom';
import Homepage from "./homepage/Homepage";
import Product from './product/Product';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/product' element={<Product />} />
    </Routes>
  </>
}


export default App;