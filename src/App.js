import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/Home.page";
import Navbar from "./components/Navbar";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import SuperheroesPage from "./components/Superheroes.page";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="super-heroes" element={<SuperheroesPage />}></Route>
        <Route path="rq-super-heroes" element={<RQSuperheroesPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
