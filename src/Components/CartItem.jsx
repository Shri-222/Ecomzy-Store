import React from 'react'

import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slice/CardSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }
  
    return (
        <div>
            <div className='flex items-center mx-auto justify-evenly border-b-2 border-black mt-5 lg:w-[100%] md:w-[80%] sm:w-[60%]'>
                <div className='w-[30%] mr-20 ml-5'>
                    <img src={item.image} alt="Product" className='object-cover'/>
                </div>
                <div className='w-[65%]'>
                    <div>
                        <h2 className='text-[22px] text-slate-700 font-bold mb-10'>
                            {item.title}
                        </h2>
                        <p className='text-base text-slate-600 mb-5'>
                            {item.description.split(" ").slice(0,15).join(" ") + "..."}
                        </p>
                    </div>
                    <div className='flex justify-between mb-8'>
                        <p className='text-lg text-green-700 font-extrabold'> 
                            ${item.price}
                        </p>
                        
                        <button className='px-3 py-3 bg-red-300 text-red-800 rounded-full mr-5 hover:text-white hover:bg-red-500 transition duration-150 ease-in'
                            onClick={removeFromCart}
                        > 
                            <MdDelete/>
                        </button>
                    </div>
                </div>
            </div>
            
            
        </div>
  )
}

export default CartItem