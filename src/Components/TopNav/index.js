import { useSelector } from 'react-redux';
import './_top-nav.scss'
import { Link } from 'react-router-dom';

export default function TopNavComponent() {

  const cartItemCount = useSelector(state=>state.cartReducer.totalItems);
    return (
      <div>
        <div className='header bg-dark'>
          <div className='top-nav-row'>
            <div className='brand my-1'>
              <h1> eStore </h1>
            </div>
            <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
              <div className='dropdown m-0 p-0'>
                <select className='select-btn w-100 m-0 p-0'>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>
              </div>
              <input type="search" className="form-control" placeholder="Search...." />
              <button className='fa fa-search'></button>
            </div>
            <div className='login-container p-0'>
              <i className='fa fa-user-circle user-icon'></i>
              <h5><a href='#'>Login</a></h5> / <h5><a href='#'>Register</a></h5>
            </div>
            <div className='cart-whishlist'>
              <ul className='p=0'>
                <li className='list-icon'>
                  <i className='fa fa-heart' />
                </li>
                <Link to='/cart'>
                  <li className='list-icon'>
                    <i className='fa fa-shopping-cart' />
                    {
                      cartItemCount !==0 ? 
                        <div id='cart-item-count'>
                          <p>{cartItemCount}</p>
                        </div>
                      : <></>}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

