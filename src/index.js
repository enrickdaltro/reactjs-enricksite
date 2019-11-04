import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header/Header";
import Video from "./video/Video";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Video} />
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<Routes />, document.querySelector("#root"));
