import "./App.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
      <main>
        <Navbar />
        <Background />
        <LandingPage/>
      </main>
  );
}

export default App;
