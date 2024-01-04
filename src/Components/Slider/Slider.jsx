import { Carousel } from "react-bootstrap";
import "./Slider.css";
import banner1 from "../../assets/banner_1.png";
import banner2 from "../../assets/banner_2.jpg";
import banner3 from "../../assets/banner_3.png";
import banner4 from "../../assets/banner_4.png";
import banner5 from "../../assets/banner_5.png";
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        {" "}
        {/* Set interval time in milliseconds (3000 = 3 seconds) */}
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner4} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={banner5} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
