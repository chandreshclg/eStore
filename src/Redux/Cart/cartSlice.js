import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems:[],
    totalItemPrice:0,
    totalItems:0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addCartItem : (state,action) => {
            let item_exist = state.cartItems.find((item)=> item.id===action.payload.id);
            if(!item_exist){
                state.cartItems = [...state.cartItems, action.payload];
                state.totalItems = ++state.totalItems;
                state.totalQuantity = ++state.totalQuantity;
                state.totalItemPrice = state.totalItemPrice+ action.payload.price;
            }
        },
        updateItemQuantity : (state,action) => {
            let index = action.payload.key;

            if(action.payload.operator==="+"){
                ++state.cartItems[index].quantity;
                state.totalItemPrice = state.totalItemPrice+action.payload.item.price;
                ++state.totalQuantity;
            } else if(action.payload.operator==="-"){
                if(state.cartItems[index].quantity>1){
                    --state.cartItems[index].quantity;
                    state.totalItemPrice = state.totalItemPrice-action.payload.item.price;
                    --state.totalQuantity;
                }
            }
        },
        deleteCartItem : (state,action) => {
            let filteredCart = state.cartItems.filter((item)=> {
                return item.id != action.payload.id;
            });

            state.cartItems = filteredCart;
            state.totalQuantity =  state.totalQuantity - action.payload.quantity;
            --state.totalItems;
            state.totalItemPrice = state.totalItemPrice - (action.payload.price * action.payload.quantity);
        }
    }
})

export const {addCartItem, updateItemQuantity, deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;