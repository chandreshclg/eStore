import { useLocation } from 'react-router-dom';
import './_product-details.scss'
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../Redux/Cart/cartSlice';

export default function ProductDetails() {
    const location = useLocation();
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(addCartItem(location.state));
    }
    return (
      <div>
        <div className='row container my-5 product-details-container'>
            <div className='col-5 product-img-container'>
                <img src={require("../../assets/images/"+location.state.product_img)}/>
            </div>
            <div className='col-7 product-info'>
                <span id='product-name'>{location.state.product_name}</span>
                <div className='rating-container'>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                </div>
                <hr/>
                <div className='product-price'>
                    MRP: <span className='price'> ${location.state.price}</span>
                    <div> Inclusive of all taxes.</div>
                </div>
                <div className='my-3 product-description'>
                    <span style={{fontSize:"0.8em"}}> Some Product Description goes here...</span>
                </div>

                <div className='my-5' onClick={addToCart}>
                    <div className='btn btn-warning cart-button'>
                        <div className='cart-icon-container'>
                            <i className='fa fa-shopping-cart'/>
                        </div>
                        <div className='cart-text-container'>
                            Add to Cart 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }