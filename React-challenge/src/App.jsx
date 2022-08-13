import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './global.css'

/* Get the code from browser url */
const code = new URLSearchParams(window.location.search).get('code');

/* 
Performance: Lazy loading will improve the performance of the application. 
Only the necessary components will be loaded with lazy loading. 
Hence the loading time will be fast compare to loading everything on initialising 
*/
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const CardDetails = lazy(() => import('./pages/CardDetails'));

/**
 * The starting page for your App
 */
function App() {

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={code ? <Home code={code} /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carddetails" element={<CardDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;