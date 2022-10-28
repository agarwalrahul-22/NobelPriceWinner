import React from 'react'
import FetchComponent from './FetchComponent';
import FilterComponent from './FilterComponent';
export default function MainComponent() {
  return (
    <div style={{display: "flex", flexjustifyContent: "center"}}>
      <FilterComponent />
      <FetchComponent />
    </div>
  );
}
