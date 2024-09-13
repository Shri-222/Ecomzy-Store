import React from 'react'
import { useState, useEffect } from 'react';
import { Spinner } from '../Spinner';
import Product from '../Product';

const Home = () => {
  
  const P_API = "https://fakestoreapi.com/products";
  const [Items, setItem] = useState([]);
  const [loding, setLoding] = useState(false);

  async function getPostsData() {
      setLoding(true);

      const posts = await fetch(P_API);
      const data = await posts.json();

      setItem(data);

      setLoding(false);

      console.log(data)
    }

  useEffect(() => {
    getPostsData();
    
  }, []);

  return (
    <div>
        {
          loding ? 
          (<Spinner/>) : 
          (
            Items.length > 0 ?
              ( 
                <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto mt-10 p-3'>
                  {
                    Items.map((Item) => 
                      (
                      <Product key={Item.id} Item={Item}/>
                      ))
                  }
                </div>
              ) : 
              
              (
                <div>
                <h2> No Data Found </h2>
                </div>
              )

          )
        }
    </div>
  )
}

export default Home