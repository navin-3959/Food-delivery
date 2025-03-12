import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { datacontext } from '../context/Usercontext';
import food_items from '../Food';
import { useSelector } from 'react-redux';
const Nav = () => {
    let {input,setinput, setFilteredFood,setshowcart} = useContext(datacontext)
    useEffect(()=>{
      let newlist =   food_items.filter((item)=>item.food_name.toLowerCase().includes(input))
      setFilteredFood(newlist)
    },[input])
    let items = useSelector(state=>state.cart)
    
    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500' />
            </div>
            <form className='w-[50%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
                <IoSearch className='w-[30px] h-[30px] text-green-500 text-xl ' />
                <input type="text" placeholder='Search items..' className='w-[100%] outline-none text-[16px] md:text-xl' onChange={(e)=>setinput(e.target.value)} value={input}/>
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md relative cursor-pointer ' onClick={()=>{setshowcart(true)}}>
                <span className='absolute top-0 right-1 text-green-500 font-semibold text-xl'> {items.length}</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />

            </div>
        </div>
    )
}

export default Nav