import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import './counter.css'; 

const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const incrementTime = Math.abs(Math.floor(2000 / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <h2 className="counter-value">{count}+</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const RealEstateCounters = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const data = [
    { value: 15, label: "Years" },
    { value: 40, label: "Projects" },
    { value: 1200, label: "Families Joined Us" },
    { value: 15, label: "Sq Ft (in Million)" },
  ];

  return (
    <div className="counters-section" ref={ref}>
      <div className="counters-container">
    
        {inView &&
          data.map((item, index) => (
            <Counter key={index} value={item.value} label={item.label} />
          ))}
          
      </div>
    </div>
  );
};

export default RealEstateCounters;