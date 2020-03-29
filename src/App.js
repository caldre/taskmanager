import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import PersonnelView from "./layout/PersonnelView";
import TaskView from "./layout/TaskView";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="root-container">
        <Header />
        <Navbar />
        <Route exact path="/" component={TaskBoard} />
        <Route exact path="/personnel" component={PersonnelView} />
        <Route exact path="/tasks" component={TaskView} />
      </div>
    </Router>
  );
};

export default App;
