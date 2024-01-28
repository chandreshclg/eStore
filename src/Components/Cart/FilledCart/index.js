import { useDispatch, useSelector } from 'react-redux';
import './_filled-cart.scss'
import { deleteCartItem, updateItemQuantity } from '../../../Redux/Cart/cartSlice';

export default function FilledCartComponent() {
    const cart = useSelector(state=>state.cartReducer);
    const dispatch = useDispatch();
    const quantityHandler = (e, item, key) =>{
        const payload = {
            operator : e.target.innerText,
            key,
            item
        }
        if(e.target.innerText==="+"){
            dispatch(updateItemQuantity(payload));
        } else if(e.target.innerText==="-"){
            dispatch(updateItemQuantity(payload));
        }
    }

    const deleteHandler = (item) => {
        dispatch(deleteCartItem(item));
        console.log(item);
    }
    return (
      <div>
        <div className='row my-5 fc-main-div'>
            <div className='col-8 p-4'>
                {
                    cart.cartItems.map((item,key)=>{
                        return(
                            <div>
                                <div className='row cart-item-card'>
                                    <div className='col-4'>
                                        <img src={require("../../../assets/images/"+item.product_img)}/>
                                    </div>
                                    <div className='col-8'>
                                        <div className='p-3 cart-item-details'>
                                            <span className='card-item-name'>{item.product_name}</span>
                                            <div className='card-item-price'>
                                                <span>${item.price}</span>
                                            </div>
                                            <div>
                                                <i className='fa fa-star text-warning'/>
                                                <i className='fa fa-star text-warning'/>
                                                <i className='fa fa-star text-warning'/>
                                                <i className='fa fa-star text-warning'/>
                                                <i className='fa fa-star text-warning'/>
                                            </div>
                                            <hr/>
                                            <div className='cart-edit-container'>
                                                <div className='btn-group mx-3' onClick={(e)=> quantityHandler(e, item, key)}>
                                                    <div className='btn btn-outline-dark'>
                                                        <div style={{width:"0.5em"}}>
                                                            <span> - </span>
                                                        </div>
                                                    </div>
                                                    <div className='btn'>
                                                        {item.quantity}
                                                    </div>
                                                    <div className='btn btn-outline-dark'>
                                                        <div style={{width:"0.5em"}}>
                                                            <span> + </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='btn btn-outline-danger mx-4' onClick={()=>deleteHandler(item)}>
                                                    <span> <i className='fa fa-trash mx-2'/> Remove Item </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='col-4 px-4 py-3 my-4 cart-summary'>
                <h2 className='mb-5 mt-3'>Summary</h2>
                <div>
                    <span> Cart Total : ${cart.totalItemPrice}</span>
                    <span> Shipping Charges : Free </span>
                    <hr/>
                    <span className='summary-total'> Total : ${cart.totalItemPrice}</span>
                    <hr/>
                </div>
                <div className='btn btn-outline-dark w-100 mb-4 mt-1'>
                    Checkout
                </div>
            </div>
        </div> 
      </div>
    );
  }