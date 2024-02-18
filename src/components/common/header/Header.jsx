import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Cursos</Link>
            </li>
            <li>
              <Link to='/about'>Sobre</Link>
            </li>
            <li>
              <Link to='/team'>Equipe</Link>
            </li>
            <li>
              <Link to='/pricing'>Planos</Link>
            </li>
            <li>
              <Link to='/journal'>Notícias</Link>
            </li>
            <li>
              <Link to='/contact'>Contato</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>OBTER CERTIFICADO</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
