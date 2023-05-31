import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./App.css";
import Menu from "./component/navbar/Menu";
import Home from "./pages/Home";


const App = () => {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <Navbar clicked={clicked} isClicked={isClicked} />
      {clicked ? <Menu /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

const App = () => <div className="App">
      <h1>
      Laundry Website
      </h1>
</div>


export default App;
