
import React, { useState, useEffect, useRef } from 'react';
import TimeDisplay from './TimeDisplay';
import ControlButtons from './ControlButtons';
import { cn } from '@/lib/utils';

interface StopwatchProps {
  className?: string;
}

const Stopwatch: React.FC<StopwatchProps> = ({ className }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Update document title with current timer
  useEffect(() => {
    const formattedTime = formatTime(elapsedTime);
    document.title = `${formattedTime.minutes}:${formattedTime.seconds}.${formattedTime.milliseconds} - Elegant Stopwatch`;
    
    return () => {
      document.title = 'Elegant Stopwatch';
    };
  }, [elapsedTime]);

  const startTimer = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    intervalRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current);
    }, 10); // Update every 10ms for smoother animation
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setElapsedTime(0);
  };

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(2, '0')
    };
  };

  const formattedTime = formatTime(elapsedTime);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <TimeDisplay 
        time={formattedTime} 
        isRunning={isRunning} 
        className="mb-10 animate-enter" 
      />
      <ControlButtons 
        isRunning={isRunning}
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
        className="animate-enter" 
      />
    </div>
  );
};

export default Stopwatch;
