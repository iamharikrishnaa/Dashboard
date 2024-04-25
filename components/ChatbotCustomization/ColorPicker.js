import React, { useState, useRef, useEffect } from 'react';
import { ChromePicker, SketchPicker } from 'react-color';

const ColorPicker = ({ initialColor, labelText, onColorChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [colorSelected, setColorSelected] = useState(false);
  const pickerContainerRef = useRef(null);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleColorChange = (color) => {
    onColorChange(color);
    setColorSelected(true);
  };

  const handleClickOutside = (event) => {
    if (
      pickerContainerRef.current &&
      !pickerContainerRef.current.contains(event.target)
    ) {
      setShowPicker(false);
      setColorSelected(false); // Reset colorSelected state when clicking outside
    }
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      handleClickOutside(event);
    };

    // Add event listener for mousedown on document
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      // Clean up by removing the event listener when the component unmounts
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []); // No dependencies, so it runs only once on mount

  useEffect(() => {
    // If a color is selected, close the picker after a delay
    if (colorSelected) {
      const timeoutId = setTimeout(() => {
        setShowPicker(false);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [colorSelected]);

  return (
    <div className="color-picker">
      <div className="color-label-container">
        <div className="current-color" style={{ backgroundColor: initialColor }} onClick={togglePicker}></div>
        <span><b>{labelText}</b></span>
      </div>

      {showPicker && (
        <div ref={pickerContainerRef} className="color-picker-wrapper">
          <SketchPicker color={initialColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
