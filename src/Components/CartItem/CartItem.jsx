/* eslint-disable react/jsx-key */
import  { useContext } from 'react'
 import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";import { Col ,Row } from 'react-bootstrap'
const CartItems = () => {
  // eslint-disable-next-line no-unused-vars
  const {getTotalCartAmount, all_product ,cartItems, removeToCart} =useContext(ShopContext)
  return (
   







    <div className='cartitems'>
     
     <Row >
       <Col  className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </Col>
        <hr />
        <Col className='cartitems-all' >
        {all_product.map((e)=>{
          if(cartItems[e.id]>0){
              return <div>
              <div className="cartitems-format cartitems-format-main ">
                <img className='carticon-product-icon' src={e.image} alt="" />
                <p className='name-product'>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>$ {e.new_price*cartItems[e.id]}</p>
     <div className='carticon-remove-icon' onClick={()=>{removeToCart(e.id)}}><FontAwesomeIcon icon={faTrash} /></div>


              </div>
              </div>
          }
          return null
        })}
        </Col>

       </Row>

              <Row>
              <Col xl='6'xm='12'> <div className="cartitems-promocode">
                <p>
                  If you have promo code, Enter it here
                </p>
                <div className="cartitems-promobox">
                  <input type="text"  placeholder='Promo code'/>
                  <button>Submit</button>
                </div>
              </div></Col>
                <Col xl='6'xm='12'> 
                <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div >
                 <div className="cartitems-total-item">
                  <p>Subtatal</p>
                  <p>${getTotalCartAmount()}</p>
                 </div>
                 <hr />
                 <div className="cartitems-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                 </div>
                 <hr />
                 <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                 </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
              </div></Col>
            

              </Row>
    
        
            <div className="cartitems-down">
             
             
            </div>
    </div>
  )
}

export default CartItems