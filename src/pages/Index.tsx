
import React from 'react';
import Stopwatch from '@/components/Stopwatch';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-nude-50 to-nude-100 p-6">
      <div className="w-full max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-nude-800 tracking-tight mb-2 animate-fade-in">
            Elegant Stopwatch
          </h1>
          <p className="text-nude-600 text-lg animate-fade-in opacity-80">
            Beautifully designed for precision timing
          </p>
        </header>
        
        <main className="w-full py-6">
          <Stopwatch />
        </main>
        
        <footer className="mt-16 text-center text-nude-500 text-sm animate-fade-in">
          <p>
            Designed with elegance and precision in mind
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
