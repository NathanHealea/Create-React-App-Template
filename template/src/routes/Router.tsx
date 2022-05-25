// --- Imports --- //
import React, { ReactNode } from 'react';

import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing.page';
import NotFound from '../pages/NotFound.page';

/**
 * Router Props interface
 */
interface RouterProps {
  //children?: ReactNode | Array<ReactNode>
  //className?: string
}

/**
 * Router Component
 */
const Router = (props: RouterProps) => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<NotFound/ >} />
    </Routes>
  );
};

// Default Return
export default Router;
