import React from 'react';
import { FaSistrix } from "react-icons/fa";

const Search = () => {
  return (
    <form className='mt-20 mx-auto shadow-lg w-9/12 p-5'>
        <input type="text" className='w-11/12 focus:outline-none' placeholder='Search for a product' />
        <button type='submit'> <FaSistrix /> </button>
    </form>
  )
}

export default Search