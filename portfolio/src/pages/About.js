import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Profile from "../components/Profile";
import './styles.css'

function About() {
  return (
    <div>
      
      <Container  style={{ padding: 60, backgroundColor: "black"}}>
        <Row>
          <Col size="md-12">
            <img className="mx-auto" src="https://bit.ly/3hQGq57" alt="profile image" style={{borderRadius: 15}} />
            
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <hr />
            <p className="bodytext text-left mainfont">
            <h3 className="mainfont">Iv&aacute;n J. Zapata-Rivera, MBA</h3>
            <b>MBA</b> (International Enterprises, Polytechnic University of Puerto Rico)<br></br>
                  <b>Certified Web Developer</b> (HTML5, CSS, JavaScript (Vanilla, jQuery and Sequelize), MySQL, and MERN (MongoDB, Express, React.js, and Node.js, Rutgers University)<br></br>
                  <b>United Airlines</b> Inflight Services<br></br></p>

            <hr />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="mainfont">
            <h2>Welcome to my Profile</h2>
            <p class="bodytext mr-2" id="p0">Hi, and thank you for taking your time to read a bit about me as a web developer and individual.</p>
            <p class="bodytext mr-2" id="p1">Recently, I finished Rutgers University Full Stack Flex web developer certification. Through this course, I've earned knowledge on HTML5, CSS, JavaScript (Vanilla, jQuery and Sequelize), MySql, and MERN (MongoDB, Express, React.js, and Node.js). I've created online and offline apps using these technologies, which are available in my portfolio.</p>
            <p class="bodytext mr-2" id="p2">After finishing my certification, I've grown enthusiastic about bringing these skills over and join a leading organization where I can grow as a web developer.</p>
            <p class="bodytext mr-2" id="p3">My professional background is pretty diverse, with experience in the transportation and financial industries. Prior to joining Rutgers University, I had different roles at United Airlines as part of Inflight Services Department, which included supervising a team of more than 200 employees and helping with the operation. Before being part of United's team, I was part of the Organization Department (under Means) at Banco Santander where I had the role of Policies and Procedures Officer.</p>
            <p class="bodytext mr-2" id="p4">I invite you to visit my GitHub, browse through my profile and see the different projects I've developed along with the team of experts and now graduates from Rutgers.</p>
            <p class="bodytext mr-2" id="p5">Yours truly,</p>
            <p class="signature" id="signature">Iván J. Zapata-Rivera</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" className="title">
          Web Developer Full Stack Flex (Rutgers University)<br></br>MBA, International Enterprises (Polytechnic University of Puerto Rico)
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
