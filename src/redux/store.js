import { configureStore } from "@reduxjs/toolkit";
import chemicalsSlice from "./chemicalSlice";
export default configureStore ({
    reducer:{
        chemicals:chemicalsSlice
    }
})