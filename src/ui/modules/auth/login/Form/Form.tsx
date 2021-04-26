import React, { ReactNode } from 'react';
import background from 'ui/assets/bg-1.jpg';

export default function LoginForm({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-y-hidden flex-grow flex flex-col md:justify-center md:items-center">
      <div
        className="h-screen w-screen left-0 absolute bg-center pointer-events-none bg-cover"
        style={{
          filter: 'blur(3px)',
          top: -45,
          backgroundImage: `url(${background})`,
          zIndex: 0,
        }}
      />
      {children}
    </div>
  );
}
