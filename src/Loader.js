import React from 'react';
import './loader.css';
const Loader = () => {
  var rows = [];
  for (
    var i = 0;
    i < 8;
    i++
  ) {
    rows.push(
      <div className='cube'>
        <div className='left' />
        <div className='center' />
        <div className='right' />
        <div className='bottom' />
        <div className='shadow' />
      </div>
    );
  }
  return (
    <div id='loader'>
      {' '}
      <div id='vignette' />
      <div id='container'>
        <div id='pos'>
          {rows}
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     height: '100%',
    //     width: '100%',
    //     backgroundImage: `url(${loading})`,
    //     backgroundRepeat:
    //       'no-repeat',
    //     backgroundAttachment:
    //       'fixed',
    //     backgroundPosition:
    //       'center',
    //     backgroundSize:
    //       'cover',
    //   }}
    // ></div>
  );
};

export default Loader;
