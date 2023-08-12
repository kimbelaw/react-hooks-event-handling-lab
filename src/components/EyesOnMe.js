import React from 'react';

function EyesOnMe() {
  // Event handler for when the button is focused
  const handleFocus = () => {
    console.log('Good!'); // Display a message in the console
  };

  // Event handler for when the button loses focus
  const handleBlur = () => {
    console.log('Hey! Eyes on me!'); // Display a message in the console
  };

  return (
    <div>
      {/* Button with event handlers */}
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;

