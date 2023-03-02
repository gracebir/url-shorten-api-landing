import React from 'react';
import Banner from './components/Banner/Banner';
import Brand from './components/Brand/Brand';
import NavBar from './components/NavBar/NavBar';
import Shorten from './components/Shorten/Shorten';

function App() {
  return (
    <div className='font-poppins overflow-x-hidden md:overflow-x-hidden text-[1.125rem] bg-[#fafafa]'>
      <NavBar/>
      <Banner/>
      <Shorten/>
      <Brand/>
    </div>
  );
}

export default App;
