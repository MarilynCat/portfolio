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
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Router>
      <NaviBar />

        <Routes>
            <Route path='/' element={<Home />}></Route>


        </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
