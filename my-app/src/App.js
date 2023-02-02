import "./App.css";
import Hotels from "./Pages/Hotels/Hotels";
import Home from "./Pages/Home/Home";
import { DayProvider } from "./context/dayContext";
import { BookProvider } from "./context/bookingContext";

function App() {
  return (
    <div>
      <DayProvider>
        <BookProvider>
          <Home />
          <Hotels />
        </BookProvider>
      </DayProvider>
    </div>
  );
}

export default App;
