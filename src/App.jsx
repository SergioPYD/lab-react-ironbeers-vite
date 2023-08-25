import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
