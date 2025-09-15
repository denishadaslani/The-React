import { use, useState } from 'react';
import './App.css';
import Buttoncomp from './Buttoncomp/Buttoncomp';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback( () => {
    setCount(count + 1);
  },[]);

  const handleDecrement = useCallback( ()=> {
    setCount(count - 1);
  },[]);

  return (
    <>
      <h1>Count: {count}</h1>
      <Buttoncomp name="Increment" onClick={handleIncrement} />
      <Buttoncomp name="Decrement" onClick={handleDecrement} />
    </>
  );
}

export default App;
