import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { Col, Row } from "react-bootstrap";
import allProductData from "../../assets/all_product"; // Import your product data
import "./FallCollection.css";

const FallCollection = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on some criteria (e.g., category === 'women')
    const filtered = allProductData.filter((product) => product.category === "women");
    setFilteredProducts(filtered.slice(0, 8)); // Limit to 8 products
  }, []);

  return (
    <div className="fallcollection">
      <h1>Fall<span > Collection</span></h1>
    <>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={6}>
            {/* Adjust column width for different screen sizes */}
            <Item
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          </Col>
        ))}
      </Row>
    </>
    </div>
  );
};

export default FallCollection;
