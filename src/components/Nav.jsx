import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8 '>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500' />
            </div>
            <form className='w-[50%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'>
                <IoSearch className='w-[30px] h-[30px] text-green-500 text-xl ' />
                <input type="text" placeholder='Search items..' className='w-[100%] outline-none text-[16px] md:text-xl' />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md relative'>
                <span className='absolute top-0 right-1 text-green-500 font-semibold text-xl'> 0</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />

            </div>
        </div>
    )
}

export default Nav