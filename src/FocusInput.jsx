import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" ref={inputRef} />
      </label>
    </div>
  );
};

export default FocusInput;
