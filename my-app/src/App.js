import "./App.css";
import Hotels from "./Pages/Hotels/Hotels";
import Home from "./Pages/Home/Home";
import { DayProvider } from "./context/dayContext";
import { BookProvider } from "./context/bookingContext";
import Motel from "./Pages/Motel/Motel";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div>
      <DayProvider>
        <BookProvider>
          <Home />
          <Hotels />
        </BookProvider>
        <Motel />
        <Footer />
      </DayProvider>
    </div>
  );
}

export default App;
