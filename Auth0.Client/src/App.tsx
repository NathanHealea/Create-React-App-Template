import React from 'react';

import packageJson from '../package.json';

function App() {
  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      <div className=' grow flex flex-col justify-center items-center'>
        <h1 className=' text-4xl uppercase font-mono font-thin'>
          {packageJson.name}
        </h1>
        <h2 className='text-xl'>{packageJson.description}</h2>
      </div>
      <p>v{packageJson.version}</p>
    </div>
  );
}

export default App;
