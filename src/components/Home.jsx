import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./assets/images/hero.jpg" alt="Hero" />
                        <div className="col"> 
                        <img src="./assets/images/hero5.jpg" alt="Hero5" />
                        <div className="content">
                        <h4> jack Online</h4>
                            <h5 className="title">Cash and Carry!! Arrivals</h5>
                            <p className="subtitle">We have latest Fashions in our Store</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Products />
    </div>
    
  )
}

export default Home;



