import React, { useState } from 'react';
import Header from './Header';

function LandingPage() {
  const [isAddingProject, setIsAddingProject] = useState(false);

  return (
    <div
      className=" flex flex-col items-center justify-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/orange.png')`,
      }}
    >
      <div className="bg-black bg-opacity-50 backdrop-blur-lg w-full h-full justify-center items-center ">
        <Header/>

        <div className="flex flex-col  h-full w-full items-center justify-center">
            <h1 className="text-lg text-white text-6xl">{"I'm Nic. "}</h1>
            <h2 className="text-lg text-white text-2xl">{"I build products, strategies, and how people use both. "}</h2>
            <button>Check it out</button>
        </div>

      </div>

    </div>
  );
}

export default LandingPage;
