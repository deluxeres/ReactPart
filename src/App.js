import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import logo from './logo.svg'
import SkillPage from './pages/SkillPage/SkillPage'
import ResourcesPage from './pages/ResourcesPage/ResourcesPage'
import man from './man.png'

function App() {
  return (
    <div className="App">
      <header className="header">
          <div className="container">
              <div className="headerMenu">
                <div className="menuLogo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="menuLink">
                    <nav>
                        <li><Link to="/skills">Мои навыки</Link></li>
                        <li><Link to="/resources">Ресурсы</Link></li>
                        <li><Link to="/resources">Ресурсы</Link></li>
                        <li><Link to="/resources">Ресурсы</Link></li>
                    </nav>
                </div>
                <div className="menuBtn">
                    <button type="button" className="headerBtn">Demo</button>
                </div>
              </div>
          </div>
      </header>

      <div className="innit">
          <img src={man} />
      </div>

      <div className="main">
          <div className="container">
              <Routes>
                <Route path="/skills" element={<SkillPage/>}/>
                <Route path="/resources" element={<ResourcesPage/>}/>
              </Routes>
          </div>
      </div>
    </div>
  )
}

export default App
