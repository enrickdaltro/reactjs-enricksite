import React, { Component } from "react";
import FotoContato from "./../../FotoContact/3D62CB33-5B30-443B-A66F-46DC098E6581.JPG";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h4>
          Se você gostaria de falar comigo sobre projetos comerciais ou
          colaborações, sinta-se à vontade para me contatar em
          enrickdaltro@gmail.com Você também pode me encontrar no Instagram.
        </h4>
        <img src={FotoContato} alt="foto de contato" />
      </div>
    );
  }
}
