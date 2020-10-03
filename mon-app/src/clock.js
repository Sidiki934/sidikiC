import React from'react';
import clock from './clock.css'

class Clock extends React.Component {
  

   


  render() {
    return (
      <nav>
      <div className="container">
      <h1>
      Velo.
      </h1>
      
      <ul className="list">
      
      <a href="#" className="nav"><li>
      Home
      </li></a>
       <a href="#" className="nav"><li>
      Home
      </li></a>
       <a href="#" className="nav"><li>
      Home
      </li></a>
       <a href="#" className="nav"><li>
      Home
      </li></a>
       <a href="#" className="nav"><li>
      Home
      </li></a>
      </ul>
      
      <a href="#"><button><img src="./favicon.ico"className="logo"/>Get Velo</button></a>
      </div>
      <div className="bord"></div>
     </nav> 
      
    );
  }
}



export default Clock;