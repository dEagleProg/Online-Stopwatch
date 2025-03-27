
import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ControlButtonsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  className?: string;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ 
  isRunning, 
  onStart,
  onStop, 
  onReset,
  className
}) => {
  return (
    <div className={cn("flex items-center justify-center gap-6", className)}>
      {!isRunning ? (
        <button 
          onClick={onStart}
          className="control-btn bg-nude-500 hover:bg-nude-600 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Start"
        >
          <Play size={36} strokeWidth={2.5} />
        </button>
      ) : (
        <button 
          onClick={onStop}
          className="control-btn bg-nude-600 hover:bg-nude-700 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Pause"
        >
          <Pause size={36} strokeWidth={2.5} />
        </button>
      )}
      
      <button 
        onClick={onReset}
        className="control-btn bg-nude-200 hover:bg-nude-300 text-nude-700 p-5 rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label="Reset"
      >
        <RotateCcw size={30} strokeWidth={2} />
      </button>
    </div>
  );
};

export default ControlButtons;
