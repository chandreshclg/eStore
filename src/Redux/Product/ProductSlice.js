import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";

const initialState = {
    products: [],
    status: "idle",
    error: ""
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProduct : (state, action) => {
            const filterdData = action.payload.products.filter((ele)=>{
                return ele.category_id===action.payload.selectedCategory.id;
            })

            state.products = filterdData;
        },

        filterByPrice:(state, action) => {
            const filteredData = action.payload.products.filter((item)=>{
                return item.price>=action.payload.minPriceLimit && item.price<=action.payload.maxPriceLimit;
            })

            state.products = filteredData;
        },

        filterProductByCategory: (state, action) => {
            let filteredCategories = action.payload.categories.filter((ca) => {
                return ca.parent_category_id === action.payload.selectedCategory.id;
            });
            const filteredData = [];
            filteredCategories.forEach((ca) => {
                action.payload.products.forEach((p) => {
                    if (p.category_id === ca.id) {
                        filteredData.push(p);
                    }
                });
            });
        
            state.products = filteredData;
        },
        filterProductsHome: (state, action) => {

            const filteredData = action.payload;
            state.products = filteredData;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = "Loading...";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "Success";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "Failed!";
                state.error = action.error.message;
            });
    }
});

export const {filterProduct, filterByPrice, filterProductByCategory, filterProductsHome} = productSlice.actions;
export default productSlice.reducer;
