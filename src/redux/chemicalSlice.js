import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    chemicals:JSON.parse(localStorage.getItem("chemicals"))||[
        {id:1,name:"Hydrochloric Acid", formula:"HCL"},
        {id:2,name:"Sodium Cloride", formula:"NaCl"},
        {id:3,name:"Sulfuric Acid", formula:"H2SO4"},
        {id:4,name:"Ammonia", formula:"NH3"},
        {id:5,name:"Ethanol", formula:"C2H5OH"},
    ]
}
const chemicalSLice =createSlice({
    name:"chemicals",
    initialState,
    reducers:{
        addChemical(state,action){
            const biggestID =state.chemicals.reduce((a,b)=>Math.max(b.id,a),0)+1
            const newProduct={
                id:biggestID,
                name:action.payload.name,
                formula:action.payload.formula
            };
            state.chemicals.push(newProduct)
            localStorage.setItem("chemicals",JSON.stringify(state.chemicals))
        },
        deleteChemical(state,action){
            state.chemicals = state.chemicals.filter(item=>item.id!==action.payload)
            localStorage.setItem("chemicals",JSON.stringify(state.chemicals))
        },
        editChemical(state,action){
            state.chemicals = state.chemicals.map(item => item.id === action.payload.id ? { ...item, name:action.payload.name } : item);
            localStorage.setItem("chemicals",JSON.stringify(state.chemicals));
          },
        filterChemical(state,action){
            state.chemicals = state.chemicals.filter(item=>item.name===action.payload)
            console.log(action.payload)
        },
    }
})
export const {addChemical,deleteChemical,editChemical,filterChemical} = chemicalSLice.actions
export default chemicalSLice.reducer