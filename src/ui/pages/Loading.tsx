import React from 'react';
import Loader from 'react-spinners/BeatLoader';

export default function LoadingPage() {
  return (
    <div className="h-full flex justify-center items-center">
      <Loader />
    </div>
  );
}
