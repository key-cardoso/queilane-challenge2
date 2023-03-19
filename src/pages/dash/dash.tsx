import React from 'react';
import { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setTime(newTime);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);


    
  return (
    <div className='dash'>
      <header>
        <div>
          <h1>Weekly Planner</h1>
          <h2>Use this planner to organize your daily issues</h2>
        </div>
        <div>
          <h1>{time}</h1>
        </div>
      </header>
    
    </div>
  
    );
  };
  
export default Dashboard;