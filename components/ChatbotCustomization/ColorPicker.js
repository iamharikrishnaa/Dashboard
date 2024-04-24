import React, { useState, useRef, useEffect } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ initialColor, labelText, onColorChange }) => {
  const [showPicker, setShowPicker] = useState(false); // State to manage color picker visibility
  const pickerRef = useRef(null); // Reference to the color picker element

  // Function to handle opening/closing color picker
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  // Function to close color picker when click event occurs outside color picker
  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowPicker(false);
    }
  };

  // Add event listener for click events outside color picker
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="color-picker">
      {/* Container for the current color and label */}
      <div className="color-label-container">
        {/* Display current color */}
        <div className="current-color" style={{ backgroundColor: initialColor }} onClick={togglePicker}></div>

        {/* Label */}
        <span><b>{labelText}</b></span>
      </div>

      {/* Color picker */}
      {showPicker && (
        <div ref={pickerRef} className="color-picker-wrapper">
          <ChromePicker color={initialColor} onChange={onColorChange} />
        </div>
      )}
    </div>
  );
}

export default ColorPicker;