import { useDispatch, useSelector } from 'react-redux';
import './_products.scss';
import productSlice from '../../Redux/Product/ProductSlice';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/action';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';

export default function ProductsComponent() {

    const productData = useSelector(state=>state.productReducer.products);
    const cart = useSelector(state=>state.cartReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[]);

    const addToCart = (itemData) => {
        const payload = {...itemData, quantity:1}
        dispatch(addCartItem(payload));
    }

    console.log(productData);
    console.log(cart);
    return (
      <div className='product-container'>
        {
            productData.map((product, key)=> {
                return(
                    <div className='mx-5 p-3 product-card'>
                        <Link to="/productDetails" state={product}>
                            <div className='product-image-container'>
                                <img src={require("../../assets/images/"+product.product_img)}/>
                            </div>
                        </Link>
                        <div className='product-info'>
                            <h5>
                                <Link to="/productDetails" state={product}> {product.product_name} </Link>
                            </h5>
                            <p className='product-price'>${product.price}</p>
                            <div className='product-rating'>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                            </div>
                        </div>
                        <div className='my-3' onClick={() => addToCart(product)}>
                            <div className='cart-button'>
                                <div className='cart-icon-container mx-4'>
                                    <i className='fa fa-shopping-cart'/>
                                </div>
                                <div className='cart-text-container mx-3'>
                                    <p> Add to Cart </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    );
}