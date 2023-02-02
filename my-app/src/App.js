import './App.css';
import Hotels from './Pages/Hotels/Hotels';
import Home from './Pages/Home/Home';
import { DayProvider } from './context/dayContext';


function App(){
  return(
    <div>
      <DayProvider>
      <Home />
      <Hotels />
      </DayProvider>
      
    </div>
  )
}

export default App;
