import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  
  const {cart} = useSelector((state) => state);
  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? 
        (
          <div className='flex justify-center lg:flex-row  sm:flex-col w-[1200px] mx-auto mt-10 space-x-20 overflow-hidden'>

            <div className='lg:w-[100%]  md:[40%] '>
            {
              cart.map((item) => {
                  return <CartItem key={item.id} item={item}/>
              })
            }
            </div>

            <div className='flex flex-col justify-between top-0 w-[100%] md:w-[40%] my-20 '> 
              <div className=''>
                  <h3 className='text-2xl font-semibold text-green-900 uppercase'>
                    Your Cart
                  </h3>
                  <h2 className=' uppercase text-5xl font-bold text-green-700 mb-7 tracking-wider'>
                    Summary
                  </h2>
                  <p className='text-xl font-bold '> 
                    Total Item : <span className='font-medium'>{cart.length}</span>
                  </p>
              </div>
              <div className=''>
                <div className="text-xl font-bold">
                  Total Amount : <span className='text-xl font-extrabold'> ${TotalAmount} </span>
                </div>
                <div>
                  <button className='text-lg bg-green-700 text-white font-bold px-40 py-3 rounded-xl  border-2 border-green-600 hover:bg-white hover:text-green-600 transition duration-400 ease-in '>
                    Checkout Now
                  </button>
                </div>
                
              </div>
              
            </div>

          </div>
        ) :
        (
          <div className='h-[80vh] flex justify-center items-center flex-col'> 
            <h2 className='text-2xl font-semibold mb-5 font-poppins'>Your Cart is Empty!</h2>
            <Link to = "/">
            <button className='text-lg bg-green-600 text-white font-semibold px-10 py-2.5 rounded-xl uppercase border-2 border-green-600 hover:bg-white hover:text-green-600 transition duration-400 ease-in '>
                Shop Now
            </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart