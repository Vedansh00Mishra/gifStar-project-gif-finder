import React from 'react';
// import './Container.css'; // Assuming you have a separate CSS file for styles

const Container = ({ gifs }) => {
  return (
    <div className="container1">
      <div className="gifs-container">
        {gifs.map((gif) => (
          <div className="gif" key={gif.id}>
            <img src={gif.images.downsized.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
