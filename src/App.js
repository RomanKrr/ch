import React, { useState } from 'react';
import './styles/App.css';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [textAfterIf, setTextAfterIf] = useState('');
  const [display, setDisplay] = useState(false);

  let count = 0;

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Перевірка наявності "if ("
    if (newValue.includes('if(')) {
      count++;
      console.log(count);

      // Використання регулярного виразу для отримання тексту після "if ("
      const regex = /if\((.*)\)/;
      const match = newValue.match(regex);

      if (match) {
        const textAfterIf = match[0];
        console.log(textAfterIf);
        setTextAfterIf(textAfterIf)
      }
    }
  };

  return (
    <div className="App">
      <textarea
        className='textarea'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введіть текст"
      />
      {/* <div className={`if ${display ? 'active' : ''}`}> */}
      <div className='if'>
        <p className='pIf'>{textAfterIf}</p>
      </div>

    </div>
  );
}

export default App;
