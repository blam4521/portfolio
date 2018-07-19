import React, { Component } from 'react';
import './App.css';
import { Card, CardBody, 
        Container, Row, UncontrolledCollapse,
        Col, CardText, CardTitle, } from 'reactstrap'

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <Container>
            <header className="main-header">
              <Row noGutters={true}>
                <Col lg="4" md="5">
                  <img src={require("./img/person1.jpg")} alt=""/>
                </Col>
                <Col lg="8" md="7">
                  <div className="d-flex flex-column">
                    <div className="p-5 bg-dark text-white">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <h1 className=".display-4">Barry Lam</h1>
                        
                        <div className="d-none d-md-block">
                          <a href="http://twitter.com" className="text-white">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </div>
                        <div>
                          <a href="http://facebook.com" className="text-white">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a href={"http://instagram.com"} className="text-white">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </div>
                        <div>
                          <a href="http://github.com" className="text-white">
                            <i className="fa fa-github"></i>
                          </a>
                        </div>              
                      </div>
                    </div>

                    <div className="p-4 bg-black">
                       Front-End Developer
                    </div>

                    <div>
                      <div className="d-flex flex-row text-white align-items-stretch text-center">
                          <div className="port-item p-4 bg-primary" id="toggler"
                            data-target="#home">
                            <i className="fa fa-home fa-2x d-block"></i>
                          <span className="d-none d-sm-block">Home</span>
                          </div>
                          
                          <div className="port-item p-4 bg-success" data-toggle="collapse"
                            data-target="#resume">
                            <i className="fa fa-graduation-cap fa-2x d-block"></i>
                          <span className="d-none d-sm-block">Resume</span>
                          </div>
                          
                          <div className="port-item p-4 bg-warning" data-toggle="collapse"
                            data-target="#work">
                            <i className="fa fa-folder-open fa-2x d-block"></i>
                          <span className="d-none d-sm-block">Work</span>
                          </div>
                          
                          <div className="port-item p-4 bg-danger" data-toggle="collapse"
                            data-target="#contact">
                            <i className="fa fa-envelope fa-2x d-block"></i>
                          <span className="d-none d-sm-block">Contact</span>
                        </div>
                      </div>
                    </div>      
                  </div>
                </Col>
              </Row>
            </header>

           {/* Home */}
    
           <div id="home" class="collapse show">
              <Card className="bg-primary text-white py-5">
                <CardBody>
                  <CardTitle>Welcome To My Page</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
          </div>  
          
          


          {/* Footer */}
          <footer className="main-footer" className="p-5 bg-dark text-white">
            <Row md="6">
              <a href=" " className="btn btn-outline-light">
                <i className="fa fa-cloud"></i>
                  Download Resume
              </a>

            </Row>
          </footer> 

          </Container>
        </div>
      
    );
  }
}

export default App;
