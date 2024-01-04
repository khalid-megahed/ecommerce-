import {  Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faCartArrowDown,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import "./SectionServices.css";
import { Link } from "react-router-dom";
const SectionServices = () => {
  return (
    <div className="section-services">
    
        <Row>
          <Col  className="services"lg={4} md={6} ms={12}>
            <Link to="/" >
              <FontAwesomeIcon icon={faHandsHelping} />
              <p>
                Online customer service We receive complaints and inquiries
                online throughout the day
              </p>
            </Link>
          </Col>
          <Col className="services" lg={4} md={6} ms={12}>
          <Link to="/">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <p>Exchange and return Return or exchange within 14 days</p>
            </Link>
          </Col>
          <Col className="services" lg={4} md={6} ms={12}>
            
            <FontAwesomeIcon icon={faShippingFast} />
            <p>
              Shipping inside and outside Egypt Shipping to all governorates
              within 5 to 7 days
            </p>
          </Col>
        </Row>
     
    </div>
  );
};

export default SectionServices;
