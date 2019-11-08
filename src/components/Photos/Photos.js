import React, { Component } from "react";
import Foto1 from "../../FotoPhotos/01.jpg";
import Foto2 from "../../FotoPhotos/02.jpg";
import Foto3 from "../../FotoPhotos/03.jpg";
import Foto4 from "../../FotoPhotos/04.jpg";
import Foto5 from "../../FotoPhotos/05.jpg";
import Foto6 from "../../FotoPhotos/06.jpg";
import Foto7 from "../../FotoPhotos/07.jpg";
import Foto8 from "../../FotoPhotos/08.jpg";

export default class Photos extends Component {
  render() {
    return (
      <div>
        <img src={Foto1} alt="1" />
        <img src={Foto2} alt="2" />
        <img src={Foto3} alt="3" />
        <img src={Foto4} alt="4" />
        <img src={Foto5} alt="5" />
        <img src={Foto6} alt="6" />
        <img src={Foto7} alt="7" />
        <img src={Foto8} alt="8" />
      </div>
    );
  }
}
