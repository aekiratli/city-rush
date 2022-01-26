import logo from './logo.svg';
import './App.css';
import 'animate.css';
import { useEffect, useState } from "react";


function App() {


  const [currentPage, setPage] = useState("home");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(currentPage)
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });

  function changePage(page, fromWhere) {
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
      homeElement.classList.add("animate__slideOutUp");
    }
    if (page === "down") {
      homeElement.classList.add("animate__slideOutDown");
    }
    if (page === "left") {
      homeElement.classList.add("animate__slideOutLeft");
    }
    if (page === "home" && fromWhere === "right") {
      rightElement.classList.add("animate__fadeOut");
    }

  if( !fromWhere)
  {
  homeElement.addEventListener('animationend', () => {
    if (page === "right") 
    {
      homeElement.classList.remove("animate__slideOutRight");
      setPage("right")
      rightElement.classList.add("animate__slideInRight");
    }
    if (page === "up") 
      homeElement.classList.remove("animate__slideOutUp");
    
    if (page === "down") 
      homeElement.classList.remove("animate__slideOutDown");
    
    if (page === "left") 
      homeElement.classList.remove("animate__slideOutLeft");
    if (page === "home")
      homeElement.classList.remove("animate__fadeIn");
  })
}
else{
  console.log("yakalandın")
}
  rightElement.addEventListener('animationend', () => {
    rightElement.classList.remove("animate__slideInRight");
    if (fromWhere==="right"){
      rightElement.classList.remove("animate__fadeOut");
      setPage("home")
      setTimeout(() => {homeElement.classList.add("animate__fadeIn");}, 2500);
      
    }
  })


}

  


  return (
    <>
      <div className="App" >
        <div id="main-frame" className="App-header">
          <div id="home-frame" className='animate__animated'>
            {
              currentPage === "home" ?
                <div className='home-frame'>
                  slm
                  <button onClick={() => changePage("right")} >Go to right Page</button>
                  <button onClick={() => changePage("left")} >Go to left Page</button>
                  <button onClick={() => changePage("up")} >Go to up Page</button>
                  <button onClick={() => changePage("down")} >Go to down Page</button>

                </div>
                : ""
            }
          </div>
          <div id="right-frame" className='animate__animated'>
            {
              currentPage === "right" ?
                <div className="right-frame ">
                  <button onClick={() => changePage("home", "right")} >Go back</button>
                </div>
                : ""
            }
          </div>
          <div id="left-frame" className='animate__animated'>
            {
              currentPage === "left" ?
                <div className='left-frame'>
                  <button onClick={() => changePage("home", "left")} >Go back</button>
                </div>
                : ""
            }
          </div>
          <div id="up-frame" className='animate__animated'>
            {
              currentPage === "up" ?
                <div className='up-frame'>
                  <button onClick={() => changePage("home", "up")} >Go back</button>
                </div>

                : ""
            }
          </div>
          <div id="down-frame" className='animate__animated'>
            {
              currentPage === "down" ?
                <div className='down-frame'>
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
