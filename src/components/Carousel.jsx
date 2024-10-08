import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DrugPen from '/Images/drugpen.png';
import './Carousel.css';

function IndividualIntervalsExample() {
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" className="carousel-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-80"
            src={DrugPen}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-80"
            src={DrugPen}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={DrugPen}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;