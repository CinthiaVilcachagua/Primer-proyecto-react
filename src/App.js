import React from 'react';
//import './App.css';
import './styles/styles.scss';
import Curso from './curso.jsx' //importando otro componente curso

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://wallpaperplay.com/walls/full/3/f/3/156611.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de Piñatas online</p>
            <p> Emprende aquí</p>
            <a href="https://ed.team" className="button">Comenzar</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
    </div>
  </>
)



export default App;
