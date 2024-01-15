import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const AntalKlik = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Du har klikket på knappen {count} antal gange.</p>
      <button onClick={AntalKlik}>Klik her</button>
    </div>
  );
};

export default CounterComponent;
