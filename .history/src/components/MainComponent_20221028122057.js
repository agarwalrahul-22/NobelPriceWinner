import React from 'react'
import FetchComponent from './FetchComponent';
import FilterComponent from './FilterComponent';

export default function MainComponent() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center !important", alignItems:"center"}}>
      {/* <FilterComponent /> */}
      <FetchComponent />
    </div>
  );
}
