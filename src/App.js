import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Background />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
