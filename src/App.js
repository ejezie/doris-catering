import "./App.scss";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  const [bar, setBar] = useState(false);

  const handleBar = () => {
    setBar(!bar);
  };
  return (
    <main>
      <Navbar useBar={handleBar} barStatus={bar} />
      <Background useBar={handleBar} barStatus={bar} />
      <LandingPage />
    </main>
  );
}

export default App;
