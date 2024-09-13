import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../Redux/Slice/CardSlice';
import toast from 'react-hot-toast';

const Product = ({Item}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function addCart() {
    dispatch(add(Item));
    toast.success("Item added successfully");
  }

  function removeCart() {
    dispatch(remove(Item.id));
    toast.error("Item Removed from cart");
    }
    
  return (
    <div className='w-11/12 mb-10 group flex flex-col justify-center items-center rounded-lg shadow-[rgba(0,_0,_0,_0.23)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] hover:scale-110 transition-all duration-500 ease-in-out'>

        <div className='text-gray-700 font-bold text-left text-lg  truncate w-40 mt-5'>
            <h2>{Item.title}</h2>
        </div>

        <div className='w-40 text-gray-700 opacity-50 text-xs mt-3'>
            <p>{Item.description.split(" ").slice(0,10).join(" ") + "..." }</p>
        </div>

        <div >
            <img src={Item.image} alt={Item.title} className='h-[180px] my-3'/>
        </div>

        <div className='flex gap-16 m-auto mb-5  mt-5'>
              <div>
                <p className='text-green-600 font-semibold'> ${Item.price}</p>
              </div>    

              <div className='group-hover:bg-gray-700 group-hover:text-white text-[12px] font-bold transition duration-500 ease-in-out text-gray-700 border-2 border-gray-700 p-1 px-4 uppercase rounded-full tracking-wide'>
                {
                  cart.some((p) => p.id === Item.id)
                  ? 
                  (<button
                      onClick={removeCart}
                  >REMOVE ITEM</button>)
                    : 
                  (<button
                      onClick={addCart}
                  >ADD TO CART</button>)
                }
              </div>
        
        </div> 
        
    </div>
  )
}

export default Product