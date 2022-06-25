import React, { useState } from 'react';

const Tour = ({ name, info, image, price, id, handleDelete }) => {
  const [show, setShow] = useState(false);
  const change = () => {
    setShow(!show);
  };
  return (
    <div className='single-tour'>
      <img src={image} alt={name} />
      <main>
        <div className='tour-info'>
          <h4>{name}</h4>
          <div className='tour-price'>{price}</div>
        </div>
        {!show ? (
          <p>
            {info.slice(0, 50)}...
            <button onClick={change}>show more</button>
          </p>
        ) : (
          <p>
            {info} <button onClick={change}>show less</button>
          </p>
        )}
        <footer>
          <button onClick={() => handleDelete(id)} className='delete-btn'>
            not intersted
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Tour;
