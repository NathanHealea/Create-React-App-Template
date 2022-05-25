// --- Imports --- //
import React, {ReactNode} from 'react';
/**
 * NotFound Props interface
 */
interface NotFoundProps {
  //children?: ReactNode | Array<ReactNode>
  //className?: string
}
 
/**
 * NotFound Component
 */
const NotFound = (props:NotFoundProps) => {

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className=' text-4xl uppercase font-mono font-thin'>Page Not Found</h1>
    </div>
  );
}

// Default Return
export default NotFound;