import React from 'react'
import { useState , useRef} from 'react';


const StopWatch = () => {

  // states
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  // start button handler
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  // stop button handler
  const handleStop= () => {
    clearInterval(intervalRef.current)
  }

  
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className='text-center mt-4'>
        <h2 className='text-5xl text-orange-600'>Time Passed: {secondsPassed.toFixed(3)}</h2>
        <button
            onClick={handleStart}
            className='bg-green-600 text-black px-2 py-1 rounded-md'>
              Start
        </button>
        <button
            onClick={handleStop}
            className='bg-red-400 text-black px-2 py-1 rounded-md'>
              Stop
        </button>
    </div>
  )
}

export default StopWatch