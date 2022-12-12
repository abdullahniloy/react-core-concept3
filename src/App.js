import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Count></Count>
    </div>
  );
}

function Count() {
  // const abc = useState(9);
  const [count, setCount] = useState(1);
  console.log(count)
  const increaseCount = () => setCount(count + 1);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  const decreaseValue = () => setCount(count - 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount} >Increase</button>
      <br />
      <button onClick={decreaseValue}> Decrease</button>
    </div>
  )
}

export default App;
