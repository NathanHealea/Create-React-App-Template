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
    <div className='flex flex-col items-center justify-center h-screen '>
      <div className='flex flex-col items-center justify-center grow'>
        <h1 className='font-mono text-4xl font-thin uppercase '>
          {packageJson.name}
        </h1>
      </div>
      <p>v{packageJson.version}</p>
    </div>
  );
};

// Default Return
export default LandingPage;
