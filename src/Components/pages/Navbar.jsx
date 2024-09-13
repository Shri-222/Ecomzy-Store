import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {cart} = useSelector((state) => state)    
  return (
    <div className='bg-slate-900  py-2.5'>
        <div className='flex justify-between items-center lg:w-9/12 m-auto md:w-full sm:w-full'>
                <div>
                    <NavLink to='/'>
                        <img src="../logo.png" alt="Logo" width={170}/>
                    </NavLink>
                </div>
                <div className='flex text-white gap-7 text-lg font-medium pt-3 mr-8'>
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/cart">
                    <div className='relative '>
                         <FaCartShopping className='text-2xl '/>
                        {
                            cart.length > 0 &&
                            <span className=" text-sm absolute -top-1 -right-2 bg-green-600 h-5 w-5 rounded-full text-center flex justify-center items-center animate-bounce">{cart.length}</span>
                        }
                    </div>
                    </NavLink>

                </div>
        </div>

    </div>
    
  )
}

export default Navbar