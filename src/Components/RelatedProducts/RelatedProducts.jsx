import './RelatedProducts.css'
import data_product from '../../assets/data.js'
import Item from '../Item/Item'
import { Col, Container, Row } from 'react-bootstrap'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>
        Rerated Products
      </h1>
      <hr/>
      <Container className="relatedproducts-item">
        {data_product.map((item, i) => {
          return<>
          <Row>
            <Col lg='12' xs='12' >
              {" "}
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />{" "}
            </Col>
          
            </Row>
          </>
        })}
      </Container>
    </div>
  )
}

export default RelatedProducts
