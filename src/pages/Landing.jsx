import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Landing() {
    return (
      <>
        <h1>React Examples</h1>
        <nav>
            <Link to="hello" >Home</Link> {" | "}
            <Link to="pokemon" >Pokemon</Link> {" | "}
            <Link to="wordle" >Wordle</Link> {" | "}
        </nav>
        <br />
        <div className="content" >
            <Outlet />    
        </div>
      </>
    )
  }
  
  export default Landing
