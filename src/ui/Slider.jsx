import { useEffect, useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 800px;
  margin: auto;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const SliderBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Bar = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ImageSlider = () => {
  const images = [
    "home-slider/home-slide-img-1.jpg",
    "home-slider/home-slide-img-2.jpg",
    "home-slider/home-slide-img-3.jpg",
    "home-slider/home-slide-img-4.jpg",
    "home-slider/home-slide-img-5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBarClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      {/* <Slider>
        {images.map((image, index) => (
          <Slide key={index} active={index === currentIndex}>
            {index === currentIndex && (
              <Image src={image} alt={`Slide ${index + 1}`} />
            )}
          </Slide>
        ))}
      </Slider> */}
      <Slider>
        {images.map((image, index) => (
          <Slide key={index} active={index === currentIndex}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </Slider>

      <SliderBar>
        {images.map((_, index) => (
          <Bar
            key={index}
            active={index === currentIndex}
            onClick={() => handleBarClick(index)}
          />
        ))}
      </SliderBar>
    </SliderContainer>
  );
};

export default ImageSlider;
