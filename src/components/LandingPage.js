import React, { useState } from 'react';

function LandingPage() {
  const [isAddingProject, setIsAddingProject] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-gray-100 md:w-1/2 w-full p-4 ">
      <h1 className="text-lg">{"Landing page"}</h1>
    </div>
  );
}

export default LandingPage;
