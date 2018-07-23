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
    this.toggle1 = this.toggle1.bind(this);
    // this.checkCollapse = this.checkCollapse.bind(this)

    this.state = { 
      collapse1: true,
      collapse2: false,
      collapse3: false,
      collapse4: false
      
    }
  }

  checkCollapse() {
    // this.setState({ collapse1: !this.state.collapse1 })
    // console.log(this.state)
    Object.keys(this.state).map( value  => {
      if(this.state[value]) {
        // console.log(value)
        // console.log(this.state[value])
        const newValue = {
          value: !this.state[value]
        }
        console.log(newValue)
        this.setState(prevState => ({
          collapse1: !prevState.collapse1
        }));
        return null
      } else {
        return null
      }
    })
  }

  toggle1() {
    this.checkCollapse()
  
    // this.setState({ collapse1: !this.state.collapse1 })
  }

  toggle2() {
    this.checkCollapse()
    this.setState({ collapse2: !this.state.collapse2 })
  }

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
                          <div className="port-item p-4 bg-primary" onClick={this.toggle1}
                            data-target="#home">
                            <i className="fa fa-home fa-2x d-block"></i>
                          <span className="d-none d-sm-block">Home</span>
                          </div>
                          
                          <div className="port-item p-4 bg-success" onClick={this.toggle2}
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
           <Collapse isOpen={this.state.collapse1} onClick={this.toggle1}>
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
          <Collapse isOpen={this.state.collapse2} onClick={this.toggle2}>
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
