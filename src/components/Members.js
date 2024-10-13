import React from "react";
import './css/Members.css';
import imgselyan from "./img/selyan.png";
import imgjiwon from "./img/jiwon.jpg";
import imgsangwon from "./img/sangwon.jpg";


function Members() {
  return (
    <div>
      <h1 className="members_title">Members</h1>
      <div className="members_images_container">
        <img src={imgselyan} alt="none" className="imgSelyan"/>
        <img src={imgjiwon} alt="none" className="imgJiwon"/>
        <img src={imgsangwon} alt="none" className="imgSangwon" />
        <p className="members_Names_Selyan">BOUNOUAR SELYAN</p>
        <p className="members_Names_Jiwon">KIM JEE WON</p>
        <p className="members_Names_Sangwon">KIM SANGWON</p>
          <p className="members_description_Selyan">
            <strong>Nationality: </strong> France <br />
            <strong>Role: </strong> CEO - CTO <br />
            <strong>School: </strong> Yonsei University <br />
            <strong> Major: </strong> Computer Science & Engineering <br />
            <strong> Experience/Skills: </strong> Grew up in Paris, <br /> participated in multiple Hackathons in France. <br />
            Like software development and blockchain technologies. <br />
            <strong> Email: </strong> selyan.bounouar1@gmail.com
          </p>
          <p className="members_description_Jiwon">
            <strong>Nationality: </strong> South Korea <br />
            <strong>Role: </strong> Marketing Manager <br />
            <strong>School: </strong> Yonsei University <br />
            <strong> Major: </strong> Political Science & International Studies <br />
            <strong> Experience/Skills: </strong> Lived in Vietnam for 16 <br /> years, experienced with creating a successful <br />
            marketing strategy for a business in Vietnam, <br /> interested in computers. <br />
            <strong> Email: </strong> jiwon.kim0210@gmail.com
          </p>
          <p className="members_description_Sangwon">
            <strong>Nationality: </strong> South Korea <br />
            <strong>Role: </strong> Business dev Manager - Finance Manager <br />
            <strong>School: </strong> Yonsei University <br />
            <strong> Major: </strong> Economics <br />
            <strong> Experience/Skills: </strong> Lived in China for 12 years, <br /> experienced in consulting social innovative <br />
            firms in Korea, interested in investment and <br /> international business. <br />
            <strong> Email: </strong> swkim216@gmail.ac.kr
          </p>
      </div>
    </div>
  );
}

export default Members;