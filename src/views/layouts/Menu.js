import React from 'react';
import image from '../../assets/images/checkmark.svg';

//import './App.css';

function Menu() {
  return (
    <div className="menu">
      <nav className="navbar  navbar-expand-md navbar-dark fixed-top bg-dark align-middle">
            <a className="navbar-brand avenir f5 b washed-blue center " href="#">
                <img src={image} className="imagen" and="imagen"  width="45px" />  
                <b className="align-middle f3"> Tareas</b>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Menu;
