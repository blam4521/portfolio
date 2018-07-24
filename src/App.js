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

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevState)
  //   if(prevState){
  //     console.log('prevState is', prevState)
      
  //   }
  // }

  toggle(e) {
    // let event = e.target.dataset.event;
    
    let event = e.target.dataset.event
    if(!event) {
      console.log('event not working')
    } else {
      console.log('event working!')
      this.setState({ 
          collapse:this.state.collapse === Number(event) ? 0 : Number(event)
        })
      }     
    }
  

  render() {
    const { collapse } = this.state;
    console.log(collapse)
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
                        
                          <div className="port-item p-4 bg-primary" 
                                data-target="#home" 
                                onClick={(i, event)=> {this.toggle(i, event)}} data-event="0">
                              <i className="fa fa-home fa-2x d-block"
                                onClick={(i, event)=> {this.toggle(i, event)}} data-event="0"
                              ></i>                            
                              <span className="d-none d-sm-block" 
                                onClick={(i, event)=> {this.toggle(i, event)}} data-event="0">
                                Home
                              </span>  
                          </div>
                          
                          <div className="port-item p-4 bg-success" 
                            data-target="#resume">
                            <i className="fa fa-graduation-cap fa-2x d-block"></i>
                          <span className="d-none d-sm-block" onClick={(i, event)=> {this.toggle(i, event)}} data-event="1">Resume</span>
                          </div>
                          
                          <div className="port-item p-4 bg-warning" 
                            data-target="#work">
                            <i className="fa fa-folder-open fa-2x d-block"></i>
                          <span className="d-none d-sm-block" onClick={(i, event)=> {this.toggle(i, event)}} data-event="2">Work</span>
                          </div>
                          
                          <div className="port-item p-4 bg-danger" 
                            data-target="#contact">
                            <i className="fa fa-envelope fa-2x d-block"></i>
                          <span className="d-none d-sm-block" onClick={(i, event)=> {this.toggle(i, event)}} data-event="3">Contact</span>
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
                      
                      <h4>HTML 5</h4>
                      <Progress color="success" value="80"/>
                    
                      <h4>CSS</h4>
                      <Progress color="info" value="70"/>

                      <h4>Javascript</h4>
                      <Progress color="warning" value="65"/>

                      <h4>Python</h4>
                      <Progress color="danger" value="72"/>

                      <h4>React</h4>
                      <Progress color="succss" value="61"/>

                      <h4>React Native</h4>
                      <Progress color="succss" value="61"/>

                       <h4>PostgreSQL</h4>
                      <Progress color="secondary" value="61"/>

                      <h4>MongoDB</h4>
                      <Progress color="secondary" value="63"/>
                         
                  </CardBody>
                </Card>
          </Collapse>
          

          {/* Resume  */}
          <Collapse isOpen={collapse === 1}>
            <div className="home"> 
              <Card className="bg-success text-white py-5">
                <CardBody>
                  <CardTitle>My Resume</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Collapse>

          {/* Work  */}
          <Collapse isOpen={collapse === 2}>
            <div className="home"> 
              <Card className="bg-warning text-white py-5">
                <CardBody>
                  <CardTitle>Work</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Collapse>

          {/* Contact  */}
          <Collapse isOpen={collapse === 3}>
            <div className="home"> 
              <Card className="bg-danger text-white py-5">
                <CardBody>
                  <CardTitle>Contact</CardTitle>
                  <CardText className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut!
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Collapse>

          {/* Footer */}
          <footer className="main-footer p-5 bg-dark text-white">
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
