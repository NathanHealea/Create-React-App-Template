// --- Imports --- //
import React, { ReactNode } from 'react';

import packageJson from '../../package.json';
/**
 * LandingPage Props interface
 */
interface LandingPageProps {
  //children?: ReactNode | Array<ReactNode>
  //className?: string
}

/**
 * LandingPage Component
 */
const LandingPage = (props: LandingPageProps) => {
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
};

// Default Return
export default LandingPage;
