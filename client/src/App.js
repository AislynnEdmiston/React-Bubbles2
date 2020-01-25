import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./components/Login";
import "./styles.scss";




function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />

        <ProtectedRoute path='/BubblePage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
