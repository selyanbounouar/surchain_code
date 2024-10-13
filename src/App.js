import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Members from "./components/Members";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Members">Members</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Members" element={<Members />} />
        </Routes>

        <footer>
          <p>&copy; 2023 SÛRCHAIN. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
