import React from 'react';
import imgMerch from '../assets/merch.jpg';

function Merch() {
  const section = {
    minHeight: '100vh',
    marginTop: '72px',
  };

  return (
    <section style={section}>
      <img src={imgMerch} className="w-100" />
      <div className="container py-5">
        <h1>Komodo OS Merch</h1>
        <br />
        <h3>Specification</h3>
        <p className="fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          recusandae facere eum velit sequi porro accusantium culpa et, nam,
          omnis ex sit dolor eos fugit. Magni, maxime necessitatibus consectetur
          earum voluptas voluptates deleniti a distinctio iure porro vel eum
          reprehenderit, nesciunt veniam corporis animi molestiae molestias
          perferendis dolores ratione illo.
        </p>
        <div className="text-center">
          <a href="#" className="btn btn-lg btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Merch;
