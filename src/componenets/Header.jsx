import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { MdAddIcCall } from 'react-icons/md';

const Header = () => {
  return (
    <>
    <section className=' w-[full] bg-[#000] mx-auto  '>
    <div className="flex px-5">
        <div className="w-3/12  justify-center py-3 pr-8 text-white flex items-center">
        <CiMail className=''/>
        <p className= 'border-r-2 border-bg-[white] pl-3 pr-5'>mail@yourcompany.com</p>
        </div>
        <div className="w-3/12 justify-start text-white flex pr-10 items-center">
        <MdAddIcCall />
        <p className=' pl-2 pr-5'>+896 120 5889 (Toll free)</p>
        </div>
        <div className="w-6/12 text-[white] gap-x-5 items-center  flex justify-end">
        <FaFacebook />
        <IoLogoTwitter />
        <FaLinkedin />
        <FaInstagramSquare />
        </div>
    </div>
    </section>
    </>
  );
}

export default Header;
