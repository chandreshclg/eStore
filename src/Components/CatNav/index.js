import { useDispatch, useSelector } from 'react-redux';
import './_cat-nav.scss'
import categorySlice from '../../Redux/Category/categorySlice';
import { useEffect, useState } from 'react';
import { getCategories } from '../../Redux/Category/action';
import { Link } from 'react-router-dom';
import { filterProduct, filterProductByCategory, filterProductsHome } from '../../Redux/Product/ProductSlice';

export default function CatNavComponent() {

  const categories = useSelector(state=>state.categoryReducer.categories);
  const fetchedProductData = useSelector(state=>state.productReducer);
  const [products, setProducts] = useState();

  useEffect(()=>{
    setProducts(fetchedProductData.products);
},[fetchedProductData.status])

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  },[])

  const filterDataByCategory = (selectedCategory) =>{
    const payload = {selectedCategory, products, categories}
    dispatch(filterProductByCategory(payload));
  }
  const filterDataHome = () =>{
    dispatch(filterProductsHome(products));
  }
  console.log(categories);

    return (
      <div>
        <div className='cat-nav-container container'>
            <ul>
              <li className='list-item'>
                <Link to='/' onClick={() => filterDataHome()}> Home</Link>
              </li>
              {
                categories.map((category)=>{
                  if(category.parent_category_id === null){
                    return(
                      <li className='list-item'><a href='#' onClick={() => filterDataByCategory(category)}>{category.category}</a></li>
                    )
                  }
                })
              }
            </ul>
        </div>
      </div>
    );
  }
  

