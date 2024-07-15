import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExampleCarouselImage from './ExampleCarouselImage';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

function CarouselComponent() {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              top: '50%',
              left: '15px',
              transform: 'translateY(-50%)',
              zIndex: '2',
              fontSize: '20px', 
              color: 'black', 
              background: 'transparent', 
              border: 'none', 
              cursor: 'pointer', 
            }}
          >
            
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              top: '50%',
              right: '15px',
              transform: 'translateY(-50%)',
              zIndex: '2',
              fontSize: '20px', 
              color: 'black', 
              background: 'transparent', 
              border: 'none',
              cursor: 'pointer', 
            }}
          >
          
          </button>
        )
      }
    >
      <ExampleCarouselImage imageSrc={image1} altText="First slide" />
      <ExampleCarouselImage imageSrc={image2} altText="Second slide" />
      <ExampleCarouselImage imageSrc={image3} altText="Third slide" />
    </Carousel>
  );
}

export default CarouselComponent;
