import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";

class Discover extends Component {
  

  render() {
    return (
      <div className="col-10 mx-auto">
        
        <Row>
          <Col size="sm-12">

          <div className="row mb-5">
    
        <div className="col-12 col-md-4 pt-4">
            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/face.png" className="card-img-top" alt="Web API's Code Quiz" />
                <div className="card-body">
                <h5 className="card-title py-2">LinkedIn</h5>
                <p className="card-text" style={{height: 125}}>Please, visit my LinkedIn Page. There you can find more information about my professional background and latest updates.</p>
                <a href="https://www.linkedin.com/in/iv%C3%A1n-j-z-81450534/" className="btn btn-primary">See More</a>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-4 pt-4">

            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/github.png" className="card-img-top" alt="Day Planner" />
                <div className="card-body">
                <h5 className="card-title py-2">GitHub</h5>
                <p className="card-text" style={{height: 125}}>All my recent projects are desposited here in GitHub. It's a great place to take a look at all my skills as a web developer.</p>
                <a href="https://github.com/johnsbrook" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>
        
        <div className="col-12 col-md-4 pt-4">

            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/resume.png" className="card-img-top" alt="Weather Widget" />
                <div className="card-body">
                <h5 className="card-title py-2">Resume</h5>
                <p className="card-text" style={{height: 125}}>If you're interested about my professional and educational background, you're welcome to download my resume here. Click on the button below to get a copy.</p>
                <a href="assets/resume.docx" className="btn btn-primary">Download</a>
                </div>
            </div>

        </div>
        
    </div>

        </Col>
        </Row>


        <Row>
          <Col size="sm-12">

          <div className="row my-5">
    
        <div className="col-12 col-md-4 py-4">
            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/coderefactor.png" className="card-img-top" alt="Code Refactor" />
                <div className="card-body">
                <h5 className="card-title py-2">Code Refactor</h5>
                <p className="card-text" style={{height: 125}}>The purpose of this assignment was to take a look at the HTML and CSS code, condense it by eliminating redundant coding and make the page more appealing to the end user and other web developers.</p>
                <a href="https://johnsbrook.github.io/01_Code-Refactor/" className="btn btn-primary align-bottom">See More</a>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-4 py-4">
            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/portfolio.png" className="card-img-top" alt="Portfolio" />
                <div className="card-body">
                <h5 className="card-title py-2">Original Portfolio</h5>
                <p className="card-text" style={{height: 125}}>Building this page was both fun and challenging. It's built using HTML and CSS with bootstrap. It's an original version of this portfolio page.</p>
                <a href="https://johnsbrook.github.io/02_Portfolio/" className="btn btn-primary align-bottom">See More</a>
                </div>
            </div>
        </div>
        
        <div className="col-12 col-md-4 py-4">
            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/password.png" className="card-img-top" alt="Password Generator" />
                <div className="card-body">
                <h5 className="card-title py-2">Password Generator</h5>
                <p className="card-text" style={{height: 125}}>With this password generator, you'll be able to create a random password with either lowercase or capital letters, numbers, special characters. It has been coded in HTML, CSS and JavaScript.</p>
                <a href="https://johnsbrook.github.io/03_PasswordGenerator/" className="btn btn-primary">See More</a>
                </div>
            </div>
        </div>

    </div>
          
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
        <div className="row mb-5">
    
        <div className="col-12 col-md-4 py-4">
            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/quiz.png" className="card-img-top" alt="Web API's Code Quiz" />
                <div className="card-body">
                <h5 className="card-title py-2">Web API's Code Quiz</h5>
                <p className="card-text" style={{height: 125}}>This quiz is based on your destination knowledge and asks you interesting questions of landmarks around the world. It's been created using HTML, CSS, JavaScript and jQuery.</p>
                <a href="https://johnsbrook.github.io/04_Web_APIs_Code_Quiz/" className="btn btn-primary">See More</a>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-4 py-4">

            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/dayplanner.png" className="card-img-top" alt="Day Planner" />
                <div className="card-body">
                <h5 className="card-title py-2">Day Planner</h5>
                <p className="card-text" style={{height: 125}}>This web application allows you to save your tasks every day. It has a date that's automatically genearted every day and saves your input so you can have it all day. Its code is based in HTML, CSS, JavaScript and jQuery.</p>
                <a href="https://johnsbrook.github.io/05_Day_Planner/" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>
        
        <div className="col-12 col-md-4 py-4">

            <div className="card shadow cardStylePortfolio">
                <img src="assets/images/weather.png" className="card-img-top" alt="Weather Widget" />
                <div className="card-body">
                <h5 className="card-title py-2">Weather Widget</h5>
                <p className="card-text" style={{height: 125}}>This widget, coded in HTML, CSS, JavaScript and jQuery, retrieves current weather and forecast information from virtually any city around the world! You'll be able to make your search by city and country.</p>
                <a href="https://johnsbrook.github.io/06_Weather_Widget/" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>
        
    </div>
    </ Col>
    </ Row>
    <div className="row mb-5">
    
        <div className="col-12 col-md-4 py-4">

            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/readme.png" className="card-img-top" alt="Perfect Readme Generator" />
                <div className="card-body">
                <h5 className="card-title py-2">Perfect Readme Generator</h5>
                <p className="card-text" style={{height: 125}}>This generator will allow the user to enter all the information needed inside a Readme file without having to use the editor or syntax.</p>
                <a href="https://github.com/johnsbrook/07_Perfect_Readme" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>
        
        <div className="col-12 col-md-4 py-4">

            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/team.png" className="card-img-top" alt="Engine Employee Summary" />
                <div className="card-body">
                <h5 className="card-title py-2">Engine Employee Summary</h5>
                <p className="card-text" style={{height: 125}}>The Engine Employee Summary allows the user to create the profile of each team member and add unique properties about each employee depending on their role.</p>
                <a href="https://github.com/johnsbrook/08_Engine_Employee_Summary" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>

        <div className="col-12 col-md-4 py-4">
            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/notetaker.png" className="card-img-top" alt="Note Taker" />
                <div className="card-body">
                <h5 className="card-title py-2">Note Taker</h5>
                <p className="card-text" style={{height: 125}}>Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
                <a href="https://github.com/johnsbrook/09_Note_Taker" className="btn btn-primary">See More</a>
                </div>
            </div>
        </div>
        
    </div>
    <Row>
          <Col size="sm-12">
    <div className="row mb-5">
    
        <div className="col-12 col-md-4 py-4">

            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/employee.png" className="card-img-top" alt="Employee Manager" />
                <div className="card-body">
                <h5 className="card-title py-2">Employee Tracker</h5>
                <p className="card-text" style={{height: 125}}>This command line application allows the user to maintaint the view and manage the different employee, departmentand roles. It also allows the employer to organize and plan the HR business aspect of the operation.</p>
                <a href="https://github.com/johnsbrook/10-Employee-Tracker" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>
        
        <div className="col-12 col-md-4 py-4">

            <div className="card shadow cardStylePortfolio">

                <img src="assets/images/eataburger.png" className="card-img-top" alt="Eat-A-Burger" />
                <div className="card-body">
                <h5 className="card-title py-2">Eat-A-Burger</h5>
                <p className="card-text" style={{height: 125}}>This application will allow the user to make an order list. It's built in NodeJS with Express.</p>
                <a href="https://github.com/johnsbrook/11-Burger" className="btn btn-primary">See More</a>
                </div>
            </div>

        </div>

        <div className="col-12 col-md-4 py-4">
            
        </div>
        
    </div>
      </ Col></ Row>
</div>
      
      
    );
  }
}

export default Discover;
