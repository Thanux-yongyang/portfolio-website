import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.jpg'
import IMG2 from '../../assets/pic2.jpg'
import IMG3 from '../../assets/pic3.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'My Devops Portfolio1',
    github:'https://github.com',
    demo:'https://dribble.com'

  },
  {
    id:1,
    image:IMG1,
    title:'My Devops Portfolio2',
    github:'https://github.com',
    demo:'https://dribble.com'

  },
  {
    id:3,
    image:IMG1,
    title:'My Devops Portfolio3',
    github:'https://github.com',
    demo:'https://dribble.com'

  },
  // if you want to add more on the portfolio
  // {
  //   id:4,
  //   image:IMG1,
  //   title:'My Devops Portfolio3',
  //   github:'https://github.com',
  //   demo:'https://dribble.com'

  // }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />

          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>       
            <a href={demo} className='btn primary' target='_blank'>Live demo</a>
          </div>
        </article>
        
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio