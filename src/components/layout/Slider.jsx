import Carousel from 'react-bootstrap/Carousel';
import Layout from './Layout.jsx';
import image1 from './assets/images/1.png';
import image2 from './assets/images/2.png';
import image3 from './assets/images/3.png';
import styled from 'styled-components'; 

function Slider() {
  return (
    <Layout>
      <SliderContainer>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </SliderContainer>
    </Layout>
  );
}

export default Slider;

const SliderContainer = styled.div`
  height: 100vh; 
  width: 100%;
`;
