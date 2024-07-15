import React from 'react';

function ExampleCarouselImage({ imageSrc, altText }) {
    const imgStyle = {
        width: '60%',
        height: '30%'
    };
  return (
    <div>
      <img src={imageSrc} alt={altText}  style={imgStyle}/>
    </div>
  );
}

export default ExampleCarouselImage;
