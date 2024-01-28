import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import ProductSlice from "../Product/ProductSlice";
import cartSlice from "../Cart/cartSlice";


export const store = configureStore({
    reducer:{
      categoryReducer: categorySlice,
      productReducer: ProductSlice,
      cartReducer: cartSlice
    }
  })