import React from 'react'
import FetchComponent from './FetchComponent';
import FilterComponent from './FilterComponent';
export default function MainComponent() {
  return (
    <div style={{display: "flex"}}>
      <FilterComponent />
      <FetchComponent />
    </div>
  );
}
