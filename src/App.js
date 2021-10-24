
import "./App.css";
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Movie-club/Home";
import Landing from "./Movie-club/Landing";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path ="/" component ={Home}/>
        <Route exact path ="/abc" component ={Landing}/>

        
     
    </div>
    </Router>
  );
}

export default App;
