import React from 'react';

export default function PhotoPage({ params: { id } }) {
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <div className={'text-blue-800'}>photo id: {id}</div>
      </div>
    </div>
  );
}
