import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Hotels from './Pages/Hotels/Hotels';
import Motel from './Pages/Motel/Motel';
import Home from './Pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<Hotels />} />
      <Route path='/hotels/:id' element={<Motel />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
