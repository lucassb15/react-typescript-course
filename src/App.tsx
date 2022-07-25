import React, { useState } from 'react'
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
 function buttonClick() {
  setCounter(counter + 1);
  setName(name);  
  console.log(counter);
}

return (
  <>
    <Header title="Página Inicial" />
    <Header title="Outro... " />
    <h1>Hello dev!</h1>
    <p id='contador'>{counter}</p>
    <button onClick={buttonClick}>Incrementar</button>
    <Menu>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </Menu>
  </>
);
};



export default App;
