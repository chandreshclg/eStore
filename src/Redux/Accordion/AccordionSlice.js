import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "Men",
        items: ["Shirst", "T-Shirts", "Pents", "Coats", "Boots"]
    },
    {
        category: "Women",
        items: ["Shirst", "T-Shirts", "Pents", "Coats", "Boots"]
    },
    {
        category: "Kids",
        items: ["Shirst", "T-Shirts", "Pents", "Coats", "Boots"]
    }
]

const accordionSlice = createSlice({
    name: "AccordionSlice",
    initialState
})

 export default accordionSlice;