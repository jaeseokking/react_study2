import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <button onClick={() => {
        setVisible(!visible);
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <Counter /> */}
      <Average />
    </div>
  );
}

export default App;
