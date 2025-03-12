import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { Incrementqt, Removeitem ,Decrementqt} from '../redux/cartslice';

const Card2 = ({name,price,image,qty,id}) => {
    let dispatch  = useDispatch()
    return (
        <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between'>
            <div className='w-[60%] h-full  flex gap-3'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>

                    <img src={image} alt="" className='object-cover' />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-5'>
                    <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                    <div className='w-[100%] h-[50px]  flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 font-semibold text-xl'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300' onClick={() => dispatch(Decrementqt(id))}>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'  >{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300' onClick={() => dispatch(Incrementqt(id))}>+</button>
                         </div>
                </div>

            </div>
            <div className='flex flex-col justify-start items-end gap-6'>
             <span className='text-xl text-green-400 font-semibold'>{price}</span>
             <RiDeleteBin5Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(Removeitem(id))} />

            </div>
        </div>
    )
}

export default Card2