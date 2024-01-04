/* eslint-disable react/prop-types */
import   { useState, useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../../Components/Item/Item';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'; // Import ReactPaginate
import "./ShopCategory.css"
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter((item) => {
    if (props.category && item.category === props.category) {
      return true;
    } else if (
      props.categoryDetails &&
      item.categoryDetails === props.categoryDetails
    ) {
      return true;
    } else {
      return false;
    }
  });

  const itemsPerPage = 8; // Number of products per page
  const [currentPage, setCurrentPage] = useState(0); // Change initial page to 0

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="shop-category">
      <Container>
        <div className="shopcategory-indexsort">
          <p>
            <span>
              Showing {indexOfFirstItem + 1}-{indexOfLastItem <= filteredProducts.length ? indexOfLastItem : filteredProducts.length}{' '}
            </span>{' '}
            out of {filteredProducts.length} products
          </p>
          <div className="shopcategory-sort">
            OFFER 40%
          </div>
        </div>
        <div className="shopcategory-products">
          {currentItems.map((item, index) => (
            <Row key={index}>
              <Col lg="12" xs="12">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </Col>
            </Row>
          ))}
        </div>
        <ReactPaginate
        className='paginate'
          pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}  
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </Container>
    </div>
  );
};

export default ShopCategory;
