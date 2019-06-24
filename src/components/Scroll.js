import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '3px solid white', height: '73.5vh', padding : "20px"}}>
      {props.children}
    </div>
  );
};

export default Scroll;