import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./App.css";
import Menu from "./component/navbar/Menu";
import Home from "./pages/Home";
import ValidationProvider from "./hooks/FormValidationsContext";

const App = () => {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <ValidationProvider>
        <Navbar clicked={clicked} isClicked={isClicked} />
        {clicked ? <Menu /> : null}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ValidationProvider>
    </div>
  );
};

export default App;
