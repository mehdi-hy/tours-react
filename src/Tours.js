import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, handleDelete, refresh }) => {
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h3>our tours</h3>
          <div className='underline'></div>
        </div>
        <div className='section'>
          <button onClick={refresh} className='btn'>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className='title'>
        <h3>our tours</h3>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        return (
          <>
            <Tour {...tour} key={tour.id} handleDelete={handleDelete} />
          </>
        );
      })}
    </main>
  );
};

export default Tours;
