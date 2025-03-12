import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { Additem } from '../redux/cartslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({ name, image, price, type, id }) => {
    let dispatch = useDispatch()
    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 hover:border-2 border-green-300'>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg'>
                <img src={image} alt="" className='object-cover' />
            </div>
            <div className='text-2xl font-semibold'>
                {name}
            </div>


            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>
                    {price}
                </div>
                <div className='flex justify-center items-center gap-3 text-green-500 text-lg font-bold'>
                    {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />
                    }
                    <span>{type}</span>

                </div>
            </div>
            <button className='w-full p-3 bg-green-300 rounded-md text-gray-500 hover:bg-green-400 transition-all' onClick={() => {dispatch(Additem({ id: id, name: name, price: price, image: image, qty: 1 })); toast.success("Item added")}}>Add to dish</button>
        </div>

    )
}

export default Card