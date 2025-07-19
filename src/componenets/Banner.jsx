import React from 'react';
import Container from './Container';
import Navbar from './Navbar';

const Banner = () => {
  return (
    <>
    <Container/>
    <section >
        <div className={`bg-[url('/ban.png')] bg-no-repeat bg-cover bg-center py-50 `} >
        <h1>Hello</h1>     
        </div>
    </section>
    </>
  );
}

export default Banner;
