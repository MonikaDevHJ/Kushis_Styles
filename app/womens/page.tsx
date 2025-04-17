"use client";

import React from 'react'
import { useState } from 'react';

const WomenPAge = () => {
  const [selectedCatogory, setSelectedCatogory] = useState("all");


  return (

    <div className=''>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>

        {/* Fliter section  */}
        <div className='bg-white p-5 rounded-md w-52 shadow'>
          <label className="block text-xl font-bold mb-2">Category</label>

          <select
            className='w-full border rounded-md p-2'
            // value={selectedCatogory}
            onChange={(e) => setSelectedCatogory(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='kurtis'>Kurtis</option>
            <option value='jeans'>Jeans</option>
            <option value='dresses'>Dresses</option>
          </select>
        </div>


        {/* image section  */}
        <div className=''>
          pkjhgf
        </div>

      </div>

    </div>

  )
}

export default WomenPAge
