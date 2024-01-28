import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk(
    'getCategories',
    () =>{
        const categories = fetch("http://localhost:3003/producCategories")
        .then((res)=>res.json());
        return categories;
    }
)