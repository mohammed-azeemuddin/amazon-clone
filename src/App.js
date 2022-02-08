import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Route , Routes } from "react-router-dom"; 

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
              [
                <Header />,
                <Home />
              ]
            }>
          </Route>
          <Route path="/checkout" element={
              [<Header />]
            }>
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
