import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5 animated zoomIn'>
      <img alt='robots' className="br-100 w-3 h-3" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
