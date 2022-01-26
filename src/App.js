import logo from './logo.svg';
import './App.css';
import 'animate.css';
import { useEffect, useState } from "react";
import Particles from 'particlesjs';

function App() {


  const [currentPage, setPage] = useState("home");
  useEffect(() => {
    
  var particles = Particles.init({
    selector: '.background',
    color: '#DA0463'
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
                  <h1 className='animate__animated animate__heartBeat animate__infinite	infinite'>CITY RUSH</h1>
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
                  <button onClick={() => changePage("home", "right")} >Go back</button>
                </div>
                : ""
            }
          </div>
          <div id="left-frame" className='animate__animated'>
            {
              currentPage === "left" ?
                <div id="left" className='left-frame'>
                  <button onClick={() => changePage("home", "left")} >Go back</button>
                </div>
                : ""
            }
          </div>
          <div id="up-frame" className='animate__animated'>
            {
              currentPage === "up" ?
                <div id="up" className='up-frame'>
                  <button onClick={() => changePage("home", "up")} >Go back</button>
                </div>

                : ""
            }
          </div>
          <div id="down-frame" className='animate__animated'>

              
            {
              currentPage === "down" ?
                <div id="down" className='down-frame'>
    <button onClick={() => changePage("home", "down")} >Go back</button>
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
