import React from 'react';

export default function Regions({
  regions,
  selectedRegion,
  onClick,
}) {
  return (
    <ul>
      { regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name}
            {selectedRegion === name ? '(V)' : '' }
          </button>
        </li>
      ))}
    </ul>
  );
}
