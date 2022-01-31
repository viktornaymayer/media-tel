import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import { appRoutes } from './router';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          {appRoutes.map(route => 
            <Route
              key={route.path}
              element={route.element}
              path={route.path}
            />
          )}
          <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
