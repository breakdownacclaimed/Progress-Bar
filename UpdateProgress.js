import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UpdateProgress() {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100));
    console.log(progress); // Check the updated progress value
  };
  

  return <ProgressBar progress={progress} onClick={handleClick} />;
}
