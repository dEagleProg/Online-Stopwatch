
import React from 'react';
import { cn } from '@/lib/utils';

interface TimeDisplayProps {
  time: {
    minutes: string;
    seconds: string;
    milliseconds: string;
  };
  isRunning: boolean;
  className?: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, isRunning, className }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative glass-card px-8 py-10 rounded-3xl">
        <div className="time-display flex items-center text-nude-800 font-medium">
          <span className="text-8xl md:text-9xl lg:text-[10rem] leading-none">
            {time.minutes}
          </span>
          <span className={`text-7xl md:text-8xl lg:text-9xl mx-2 ${isRunning ? 'time-delimiter' : ''}`}>:</span>
          <span className="text-8xl md:text-9xl lg:text-[10rem] leading-none">
            {time.seconds}
          </span>
          <span className="text-7xl md:text-8xl lg:text-9xl mx-2 opacity-50">.</span>
          <span className="text-5xl md:text-6xl lg:text-7xl opacity-70">
            {time.milliseconds}
          </span>
        </div>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-nude-500 px-4 py-1 rounded-full">
          <span className="text-white text-sm font-medium tracking-wider uppercase">Stopwatch</span>
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
