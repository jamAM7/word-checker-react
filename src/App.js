import React, { useState } from 'react';
import TextBox from './Components/TextBox';
import SubmitButton from './Components/SubmitButton';



function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === 'HelloWorld!') {
      setMessage('The word is HelloWorld!');
    } else {
      setMessage('The word is not HelloWorld!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Word Checker</h1>
      <form onSubmit={handleSubmit}>
        
        <TextBox value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <br /><br />
        
        <SubmitButton />
      </form>
      <br />
      <p style={{ fontSize: '18px', color: 'blue' }}>{message}</p>
    </div>
  );
}

export default App;