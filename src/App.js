import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {NaviBar} from "./components/Navibar";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Portfolio} from "./pages/Portfolio";
import {Contacts} from "./pages/Contacts";

function App() {
  return (
    <>
        <Router>
      <NaviBar />

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>

        </Routes>
        </Router>
    </>
  );
}

export default App;
