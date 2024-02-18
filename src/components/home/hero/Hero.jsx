import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Seja bem vindo a UNIEUDES' title='Sua melhor experiência em educação online' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate deleniti minima, deserunt accusantium unde a fuga excepturi et nostrum impedit ad reprehenderit mollitia velit, quas accusamus quam, voluptate iure!</p>
            <div className='button'>
              <button className='primary-btn'>
                COMECE AGORA <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VER CURSOS <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
