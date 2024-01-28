import { useDispatch, useSelector } from 'react-redux';
import './_cat-nav.scss'
import categorySlice from '../../Redux/Category/categorySlice';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/action';
import { Link } from 'react-router-dom';

export default function CatNavComponent() {

  const categories = useSelector(state=>state.categoryReducer.categories);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  },[])
  console.log(categories);

    return (
      <div>
        <div className='cat-nav-container container'>
            <ul>
              <li className='list-item'>
                <Link to='/'> Home</Link>
              </li>
              {
                categories.map((category)=>{
                  if(category.parent_category_id === null){
                    return(
                      <li className='list-item'><a href='#'>{category.category}</a></li>
                    )
                  }
                })
              }
            </ul>
        </div>
      </div>
    );
  }
  

