import React from 'react';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='font-poppins overflow-x-hidden md:overflow-x-hidden text-[1.125rem] bg-[#fafafa]'>
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
