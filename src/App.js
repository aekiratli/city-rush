import logo from './logo.svg';
import './App.css';
import 'animate.css';
import { useEffect, useState } from "react";
import Particles from 'particlesjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Container, Carousel, Modal, Row, Col,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock, faPlayCircle, faFire, faFingerprint, faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { faDiscord,faTwitter } from '@fortawesome/free-brands-svg-icons'

import char1 from "./assets/char1.gif"
import char2 from "./assets/char2.gif"
import char3 from "./assets/char3.gif"

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setPage] = useState("home");

  useEffect(() => {
    console.log(show)
    var particles = Particles.init({
      selector: '.background',
      color: '#DA0463',

    });
    // Add event listener
    document.addEventListener("mousemove", parallax);
    if (currentPage === "home")
      var elem = document.querySelector("#home");
    if (currentPage === "up")
      var elem = document.querySelector("#up");
    if (currentPage === "right")
      var elem = document.querySelector("#right");
    if (currentPage === "down")
      var elem = document.querySelector("#down");
    if (currentPage === "left")
      var elem = document.querySelector("#left");
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
    }
  });

  function changePage(page, fromWhere) {
    console.log(page, fromWhere)
    var element = document.getElementById("main-frame");
    var rightElement = document.getElementById("right-frame");
    var homeElement = document.getElementById("home-frame");
    var leftElement = document.getElementById("left-frame");
    var upElement = document.getElementById("up-frame");
    var downElement = document.getElementById("down-frame");
    void element.offsetWidth;

    if (page === "right") {
      homeElement.classList.add("animate__slideOutRight");
    }
    if (page === "up") {
      homeElement.classList.add("animate__slideOutDown");
    }
    if (page === "down") {
      homeElement.classList.add("animate__slideOutUp");
    }
    if (page === "left") {
      homeElement.classList.add("animate__slideOutLeft");
    }
    if (page === "home" && fromWhere === "right") {
      rightElement.classList.add("animate__fadeOut");
    }
    if (page === "home" && fromWhere === "up") {
      upElement.classList.add("animate__fadeOut");
    }
    if (page === "home" && fromWhere === "down") {
      downElement.classList.add("animate__fadeOut");
    }
    if (page === "home" && fromWhere === "left") {
      leftElement.classList.add("animate__fadeOut");
    }

    homeElement.addEventListener('animationend', function handleAnim() {
      if (page === "right") {
        homeElement.classList.remove("animate__slideOutRight");
        rightElement.classList.add("animate__slideInRight");
        setPage("right")
      }
      if (page === "up") {
        homeElement.classList.remove("animate__slideOutDown");
        upElement.classList.add("animate__slideInUp");
        setPage("up")
      }


      if (page === "down") {
        homeElement.classList.remove("animate__slideOutUp");
        downElement.classList.add("animate__slideInDown");
        setPage("down")
      }

      if (page === "left") {
        homeElement.classList.remove("animate__slideOutLeft");
        leftElement.classList.add("animate__slideInLeft");
        setPage("left")
      }

      if (page === "home") {
        homeElement.classList.remove("animate__fadeIn");


      }
      homeElement.removeEventListener('animationend', handleAnim);


    })

    rightElement.addEventListener('animationend', function handleAnim() {
      rightElement.classList.remove("animate__slideInRight");
      if (fromWhere === "right") {
        rightElement.classList.remove("animate__fadeOut");
        setPage("home")
        homeElement.classList.add("animate__fadeIn");
      }
      rightElement.removeEventListener('animationend', handleAnim);

    })

    upElement.addEventListener('animationend', function handleAnim() {
      upElement.classList.remove("animate__slideInUp");
      if (fromWhere === "up") {
        upElement.classList.remove("animate__fadeOut");
        setPage("home")
        homeElement.classList.add("animate__fadeIn");
      }
      upElement.removeEventListener('animationend', handleAnim);

    })
    downElement.addEventListener('animationend', function handleAnim() {
      downElement.classList.remove("animate__slideInDown");
      if (fromWhere === "down") {
        downElement.classList.remove("animate__fadeOut");
        setPage("home")
        homeElement.classList.add("animate__fadeIn");
      }
      downElement.removeEventListener('animationend', handleAnim);

    })
    leftElement.addEventListener('animationend', function handleAnim() {
      leftElement.classList.remove("animate__slideInLeft");
      if (fromWhere === "left") {
        leftElement.classList.remove("animate__fadeOut");
        setPage("home")
        homeElement.classList.add("animate__fadeIn");
      }
      leftElement.removeEventListener('animationend', handleAnim);

    })
  }



  return (
    <>
      <div className="App" >
        <canvas className="background"></canvas>
        <div id="main-frame" className="App-header">
          <div id="home-frame" className='animate__animated'>
            {
              currentPage === "home" ?
                <div id="home" className='home-frame'>
                  <h1 style={{ paddingBottom: "25px" }} className='animate__animated animate__heartBeat animate__infinite	infinite'>CITY RUSH</h1>
                  <button className="button button4" onClick={() => changePage("right")} >FAQ</button>
                  <button className="button button4" onClick={() => changePage("left")} >Roadmap</button>
                  <button className="button button4" onClick={() => changePage("up")} >About the Project</button>
                  <button className="button button4" onClick={() => changePage("down")} >Game</button>

                </div>
                : ""
            }
          </div>
          <div id="right-frame" className='animate__animated'>
            {
              currentPage === "right" ?
                <div id="right" className="right-frame ">
                  <button className="button button4" onClick={() => changePage("home", "right")} >Go back</button>
                  <Container>
                    <Accordion className="animate__animated animate__rollIn animate__delay-1s above-canvas">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Question #1</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Question #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Container>
                </div>
                : ""
            }
          </div>
          <div id="left-frame" className='animate__animated'>
            {
              currentPage === "left" ?
                <div id="left" className='left-frame'>

                  <button className="button button4" onClick={() => changePage("home", "left")} >Go back</button>
                  <div className='animate__animated animate__bounceInLeft animate__delay-1s' >
                    <div class="col">
                      <div class="timeline-steps" onClick={handleShow}>
                        <div class="timeline-step">
                          <div class="timeline-content" onClick={handleShow}>
                            <div class="inner-circle"></div>
                            <p style={{ color: "white" }} class="h6 mt-3 mb-1">2022 Q1</p>
                            <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                          </div>
                        </div>
                        <div class="timeline-step">
                          <div class="timeline-content" onClick={handleShow}>
                            <div class="inner-circle"></div>
                            <p style={{ color: "white" }} class="h6 mt-3 mb-1">2022 Q1</p>
                            <p class="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                          </div>
                        </div>
                        <div class="timeline-step" onClick={handleShow}>
                          <div class="timeline-content">
                            <div class="inner-circle"></div>
                            <p style={{ color: "white" }} class="h6 mt-3 mb-1">2022 Q1</p>
                            <p class="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
                          </div>
                        </div>
                        <div class="timeline-step" onClick={handleShow}>
                          <div class="timeline-content">
                            <div class="inner-circle"></div>
                            <p style={{ color: "white" }} class="h6 mt-3 mb-1">2022 Q1</p>
                            <p class="h6 text-muted mb-0 mb-lg-0">Open New Branch</p>
                          </div>
                        </div>
                        <div class="timeline-step mb-0" onClick={handleShow}>
                          <div class="timeline-content" >
                            <div class="inner-circle"></div>
                            <p style={{ color: "white" }} class="h6 mt-3 mb-1">2022 Q1</p>
                            <p class="h6 text-muted mb-0 mb-lg-0">In Fortune 500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Modal centered className="modal-font" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                      <button className='button button4' onClick={handleClose}>
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>
                </div>
                : ""
            }
          </div>

          <div id="up-frame" className='animate__animated'>
            {
              currentPage === "up" ?
                <div id="up" className='up-frame'>
                  <button className="button button4" onClick={() => changePage("home", "up")} >Go back</button>
                  <div className='about-project'>
                    <h1 className='animate__animated animate__bounceInLeft animate__delay-1s'>Welcome to the Night City</h1>
                    <div >
                      <Row>
                        <Col className='animate__animated animate__bounceInLeft animate__delay-2s'><FontAwesomeIcon size ="5x" icon={faDiceD20} />
                        </Col>
                        <Col className='animate__animated animate__bounceInLeft animate__delay-3s'><FontAwesomeIcon size="5x" icon={faFingerprint} />
                        </Col>
                        <Col className='animate__animated animate__bounceInLeft animate__delay-4s'><FontAwesomeIcon size="5x" icon={faFire} />
                        </Col>
                      </Row>
                      <Row style={{ paddingBottom: "25px" }}>
                        <Col className='animate__animated animate__bounceInLeft animate__delay-2s'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        </Col>
                        <Col className='animate__animated animate__bounceInLeft animate__delay-3s'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        </Col>
                        <Col className='animate__animated animate__bounceInLeft animate__delay-4s'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        </Col>
                      </Row>
                      <button className="button button4"><FontAwesomeIcon size ="2x" icon={faTwitter} /></button>
                      <button className="button button4"><FontAwesomeIcon size ="2x" icon={faDiscord} /></button>
                    </div>
                  </div>
                </div>

                : ""
            }
          </div>
          <div id="down-frame" className='animate__animated'>


            {
              currentPage === "down" ?
                <div id="down" className='down-frame'>

                  <button className="button button4" onClick={() => changePage("home", "down")} >Go back</button>
                  <Container style={{maxWidth:"250px"}}>
                  <Carousel className="caraousel" fade>
                      <Carousel.Item >
                      <img src={char1}alt="Second slide"/>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={char2}alt="Second slide"/>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img src={char3}alt="Second slide"/>
                      </Carousel.Item>
                    </Carousel>
                    </Container>
                  <Container fluid="lg">
                    
                    <button className='button button4'><FontAwesomeIcon size="2x" icon={faUnlock} /> Unlock Wallet</button>
                    <button className='button button4'><FontAwesomeIcon size="2x" icon={faPlayCircle} /> Play Game</button>
                  </Container>
                </div>
                : ""
            }
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
