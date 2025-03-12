import React, { createContext, useState } from 'react'
import food_items from '../Food';
export const datacontext = createContext()

const Usercontext = ({children}) => {
  const [filteredFood, setFilteredFood] = useState(food_items);
    let [showcart,setshowcart] = useState(false)
    let [input,setinput] = useState("")
    let data = {
       input,
       setinput,
       filteredFood,
       setFilteredFood,
       showcart,
       setshowcart
    }
    return (
        <div>
            <datacontext.Provider value={data}>
              {children}
            </datacontext.Provider>
        </div>
    )
}

export default Usercontext