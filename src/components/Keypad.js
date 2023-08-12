import React from 'react';

function Keypad() {
  // Event handler for input change
  const handleChange = (event) => {
    console.log('Entering password...'); // Display a message in the console
  };

  return (
    <div>
      {/* Input field with event handler */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;

