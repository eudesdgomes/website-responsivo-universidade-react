import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Receba as novidades!</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione tempore consequatur, laborum accusantium labore cumque modi incidunt ex dolores sapiente veritatis ea accusamus earum deserunt alias debitis magnam odio?</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Insira seu e-mail' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>UNIEUDES</h1>
            <span>Cursos Online</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explorar:</h3>
            <ul>
              <li>Quem Somos</li>
              <li>Serviços</li>
              <li>Cursos</li>
              <li>Blog</li>
              <li>Contate-nos</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Links</h3>
            <ul>
              <li>Contate-nos</li>
              <li>Planos</li>
              <li>Termos e condições</li>
              <li>Privacidade</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Postagem Recentes</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Localização</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Pernambuco, Brasil
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +55 99 99999-9999
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                ouvidoria@unieudes.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | <i className='fa fa-heart'></i> by EudesGomes
        </p>
      </div>
    </>
  )
}

export default Footer
