import { useSelector } from 'react-redux';
import './_cart.scss'
import EmptyCartComponent from './EmptyCart';
import FilledCartComponent from './FilledCart';

export default function CartComponent() {
    const cart = useSelector(state=>state.cartReducer);

    return (
      <div>
        {
            cart.cartItems.length===0 ?
                <EmptyCartComponent/>
            :
                <FilledCartComponent/>
        }
      </div>
    );
  }