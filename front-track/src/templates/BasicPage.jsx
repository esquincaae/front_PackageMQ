import React from 'react'
import NavigationBar from '../components/NavigationBar';

export default function BasicPage({ children }) {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        {children}
      </div>
    </div>
  );
}
