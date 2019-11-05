import React from "react";
import Header from "./Header/Header";
import Videos from "./Videos/Videos";
import Photos from "./Photos/Photos";
import Contact from "./Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Videos} />
        <Route path="/photos" component={Photos} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
