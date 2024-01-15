import React, { useState } from 'react';

function Hilsen() {
  const [navn, setNavn] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateNavn = () => {
    setNavn(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Indtast navn"
      />
      <button onClick={updateNavn}>Opdater navn</button>

      <p>Navn: {navn}</p>
    </div>
  );
}

export default Hilsen;
