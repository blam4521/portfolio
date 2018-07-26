import React, { Component } from 'react';
import './App.css';
import { Card, 
        CardBody, 
        Container,
        Row, 
        Collapse,
        Col, 
        CardText, 
        CardTitle,
        CardFooter, 
        Progress } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
   
    this.state = { 
      collapse: 0, 
      cards: [0, 1, 2, 3]   
    }
  }

  toggle(e) {
    let event = e.target.dataset.event
    if(!event) {
      console.log('event not working')
    } else {
      // console.log('event working!')
      this.setState({ 
          collapse:this.state.collapse === Number(event) ? 0 : Number(event)
        }, () => console.log(event))
      }     
    }
  

  render() {
    const { collapse } = this.state;
    // console.log(collapse)
    return (
        <div className="App">
          <Container>
            <header className="main-header">
              <Row noGutters={true}>
                <Col lg="4" md="5">
                  <img src={require("./img/person1.jpg")} alt="" className="img-fluid"/>
                </Col>
                <Col lg="8" md="7">
                  <div className="d-flex flex-column">
                    <div className="p-5 bg-dark text-white">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <h1 className="display-4">Barry Lam</h1>
                        
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
                       <h3>Front-End Developer</h3>
                    </div>

                    <div>
                      <div className="d-flex flex-row text-white align-items-stretch text-center">
                          <div className="port-item p-4 bg-primary" 
                                data-target="#home" 
                                onClick={(i, event)=> {this.toggle(i, event)}} 
                                data-event="0">
                              <i className="fa fa-home fa-2x d-block"
                                onClick={(i, event)=> {this.toggle(i, event)}} 
                                data-event="0"
                              ></i>                            
                              <span className="d-none d-sm-block" 
                                onClick={(i, event)=> {this.toggle(i, event)}} 
                                data-event="0">
                                Home
                              </span>  
                          </div>
                          
                          <div className="port-item p-4 bg-success" 
                              data-target="#resume"
                              onClick={(i, event)=> {this.toggle(i, event)}} 
                              data-event="1">
                              <i className="fa fa-graduation-cap fa-2x d-block"
                                 onClick={(i, event)=> {this.toggle(i, event)}} 
                                 data-event="1">
                              </i>
                            <span className="d-none d-sm-block" 
                              onClick={(i, event)=> {this.toggle(i, event)}} 
                              data-event="1">
                              Resume
                              </span>
                          </div>
                          
                          <div className="port-item p-4 bg-warning" 
                              data-target="#work"
                              onClick={(i, event)=> {this.toggle(i, event)}} 
                              data-event="2">
                            <i className="fa fa-folder-open fa-2x d-block"
                              onClick={(i, event)=> {this.toggle(i, event)}} 
                              data-event="2">
                            </i>
                          <span className="d-none d-sm-block" 
                            onClick={(i, event)=> {this.toggle(i, event)}} 
                            data-event="2">
                              Work
                            </span>
                          </div>
                          
                          <div className="port-item p-4 bg-danger" 
                              data-target="#contact"
                              onClick={(i, event)=> {this.toggle(i, event)}} 
                              data-event="3">
                            <i className="fa fa-envelope fa-2x d-block" 
                              onClick={(i, event)=> {this.toggle(i, event)}} 
                              data-event="3">
                            </i>
                          <span className="d-none d-sm-block" 
                            onClick={(i, event)=> {this.toggle(i, event)}} 
                            data-event="3">
                              Contact
                            </span>
                          </div>
                      </div>
                    </div>      
                  </div>
                </Col>
              </Row>
            </header>

           {/* Home */}
           <Collapse isOpen={collapse === 0}>
           <div className="home"> 
              <Card className="bg-primary text-white py-5">
                <CardBody>
                  <CardTitle>Welcome To My Page</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
            </div>
              <Card className="py-5">
                  <CardBody>
                    <CardTitle>My Skills</CardTitle>
                    <CardText>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                      jk;aljdfklasj Lorem kjkdflf kleipe Lorem
                    </CardText>
                      
                      <div className="move_up">
                        <h4>HTML 5</h4>
                        <Progress color="success" value="80">
                          80%
                        </Progress>  
                      </div>
                      <div className="move_up">
                        <h4>CSS</h4>
                        <Progress color="info" value="70">
                          70%
                        </Progress>
                      </div>
                      <div className="move_up">
                        <h4>Javascript</h4>
                        <Progress color="warning" value="72">
                          72%
                        </Progress>
                      </div>
                      <div className="move_up">
                        <h4>Python</h4>
                        <Progress color="danger" value="72">
                          73%
                        </Progress>
                      </div>
                      <div className="move_up">
                        <h4>React</h4>
                        <Progress color="succss" value="61">
                          61%
                        </Progress>
                      </div>  
                      <div className="move_up">
                        <h4>React Native</h4>
                        <Progress color="succss" value="65">
                          65%
                        </Progress>
                      </div>
                      <div className="move_up">
                        <h4>PostgreSQL</h4>
                        <Progress color="secondary" value="61">
                          61%
                        </Progress>
                      </div>
                      <div className="move_up">  
                        <h4>MongoDB</h4>
                        <Progress color="secondary" value="63">
                          63%
                        </Progress>
                      </div>  
                  </CardBody>
                </Card>
          </Collapse>
          
          {/* Resume  */}
          <Collapse isOpen={collapse === 1}>
            <div className="resume"> 
              <Card className="bg-success text-white py-5">
                <CardBody>
                  <CardTitle>My Resume</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
            </div>

             <Card className="py-5">
                  <CardBody>
                    <CardTitle>Where Have I Worked?</CardTitle>
                    <CardText>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                      jk;aljdfklasj Lorem kjkdflf kleipe Lorem
                    </CardText>
                    
                      <Card>
                        <CardBody>
                          <CardTitle>Industrial Brothers</CardTitle>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Junior Developer
                          </p>
                          <CardText>
                            <li>
                              Used Python and the Shotgun API to help production managers automate certain tasks.
                            </li>
                            <li>
                              Created a full-stack application for uploading Quicktime and CSV files to be parsed into individual Quicktime files to be uploaded to the Shotgun Database, using Python, Flask, Bootstrap, Shotgun API.
                            </li>
                            
                          </CardText>
                          <CardFooter className="text-muted">
                            Dates: Aug. 2016 - Feb. 2018
                          </CardFooter>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <CardTitle>Corus Entertainment - ​Nelvana Ltd</CardTitle>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Technical Artist
                          </p>
                          <CardText>
                            <li>
                              Scripted Python tools to help artists constrain multiple lights to different cameras as well as help automate other tasks such as a geometry unlock script that switches display types that can be controlled by user by inputting the name of the selected geometry.
                            </li>   
                          </CardText>
                          <CardFooter className="text-muted">
                            Dates: Aug. 2013 - Jul. 2016
                          </CardFooter>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardBody>
                          <CardTitle>Mr. X VFX</CardTitle>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: 3D Artist
                          </p>
                          <CardText>
                            <li>
                              Model, texture and look development for assets in background scenes using Maya, Mari, and Vray
                            </li>
                          </CardText>
                          <CardFooter className="text-muted">
                            Dates: Jul. 2010 - Jul. 2013
                          </CardFooter>
                        </CardBody>
                      </Card>
                     
                  </CardBody>
                </Card>
          </Collapse>

          {/* Work  */}
          <Collapse isOpen={collapse === 2}>
            <div className="work"> 
              <Card className="bg-warning text-white py-5">
                <CardBody>
                  <CardTitle>Work</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>What Have I Built?</CardTitle>
                    <CardText>
                      Model, texture and look development for assets in background scenes using Maya, Mari, and Vray  
                    </CardText>
                    <Row noGutters={true}>
                      <Col md="4">
                        <a>
                        <img src={require("./img/person1.jpg")} alt="" className="img-fluid"/>
                        </a>
                      </Col>
                      <Col md="4">
                        <a>
                        <img src={require("./img/person1.jpg")} alt="" className="img-fluid"/>
                        </a>
                      </Col>
                      <Col md="4">
                        <a>
                        <img src={require("./img/person1.jpg")} alt="" className="img-fluid"/>
                        </a>
                      </Col>
                    </Row>  
                </CardBody>
              </Card>
              
            </div>
          </Collapse>

          {/* Contact  */}
          <Collapse isOpen={collapse === 3}>
            <div className="contact"> 
              <Card className="bg-danger text-white py-5">
                <CardBody>
                  <CardTitle>Contact</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
              <Card className="py-5">
                <CardBody>
                  <CardTitle>Get In Touch</CardTitle>
                    <CardText>
                      <a href={"mailto: blam452@gmail.com"}>blam452@gmail.com</a>
                    </CardText>
                  </CardBody>
                </Card>
            </div>
          </Collapse>

          {/* Footer */}
          <footer className="main-footer p-5 bg-dark text-white">
            <Row md="6">
              <a href="https://drive.google.com/open?id=1KIgLl2IvcEhn9-VK87w3WKB3-EdRpgxy" className="btn btn-outline-light">
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
