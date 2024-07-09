import React from 'react';

function Heroo() {
  return (
    <div className='hero container'>
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae earum voluptatum animi temporibus voluptates deserunt id non, vel voluptate.</p>
            <div className="buttons">
                <button>Shop Now</button>
                <button className='cate'>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on</p>
                <div className="icon">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="FlipCart" />
                </div>
            </div>
        </div>
        <div className="heroimg">
        <img src="/images/hero-image.png" alt="hero-image" />

        </div>

    </div>
  )
}

export default Heroo