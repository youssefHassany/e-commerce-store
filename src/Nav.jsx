import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav>
        <ul>
            <Link className='inline-block mr-10' to={"/"}>Home</Link>
            <Link className='inline-block mr-10' to={"/cart"}> <FiShoppingCart/> </Link>
        </ul>
    </nav>
  )
}

export default Nav