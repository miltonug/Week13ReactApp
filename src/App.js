import React from "react";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default App;
