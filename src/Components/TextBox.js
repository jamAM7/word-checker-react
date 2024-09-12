import React from 'react';
import '../App.css';

function TextBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}                 
      onChange={onChange}           
      placeholder="Enter a word"

      //   style={{ padding: '10px', fontSize: '16px' }}      removed this and put it into the App.css
      className="text-box"
    />
  );
}

export default TextBox;