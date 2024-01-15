import React, { useState } from 'react';

const Greeting = () => {
  // Initialiserer state variabler
  const [name, setName] = useState('verden');
  const [inputValue, setInputValue] = useState('');

  // Funktion til at håndtere ændringer i input feltet
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <p>Send en hilsen til {name}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Indtast navn"
      />
      <button onClick={() => setName(inputValue)}>Opdater navn</button>
    </div>
  );
};

export default Greeting;
