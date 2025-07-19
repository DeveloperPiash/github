import React from 'react';
import Logo from "../assets/log.png"
import Header from './Header';
import Container from './Container';

const Navbar = () => {
  return (
    <>
    <Container/>
    <div className="flex justify-between bg-[brown] px-5">
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div className="">
        <nav>
          <ul className=' text-[white] font-bold flex gap-4 items-center font-me'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Blog</a></li>
            <li className=' py-[14px] px-[40px] rounded-[5px] border-2 hover:bg-amber-400 hover:text-[#000] border-[#46e79c] bg-[teal]'><a href="#">Contract</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}

export default Navbar;
