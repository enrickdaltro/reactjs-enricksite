import React, { Component } from "react";
import "./Video.css";
import foto1 from "../../FotoHome/Screen Shot 2019-11-01 at 21.38.50.png";

export default class Videos extends Component {
  render() {
    return (
      <div className="video-column">
        <img src={foto1} alt="1" />
        <img src={foto1} alt="2" />
        <img src={foto1} alt="3" />
        <img src={foto1} alt="4" />
        <img src={foto1} alt="5" />
        <img src={foto1} alt="6" />
      </div>
    );
  }
}
