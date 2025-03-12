import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        Additem: (state, action) => {
            let exititem = state.find((item) => item.id === action.payload.id)
            if (exititem) {
                return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
            }
            else {

                state.push(action.payload)
            }
        },
        Removeitem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        Incrementqt:(state,action)=>{
            return state.map((item) => (item.id === action.payload? { ...item, qty: item.qty + 1 } : item))

        },
        Decrementqt:(state,action)=>{
            
            return state.map((item) => (item.id === action.payload? { ...item, qty: item.qty -1 } : item)).filter((item)=>item.qty>0)

        }
    }
})

export const { Additem, Removeitem,Incrementqt,Decrementqt } = cartSlice.actions
export default cartSlice.reducer