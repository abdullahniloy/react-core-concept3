import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Count></Count> */}
    </div>
  );
}

function ExternalUsers(props) {
  const [users, setUser] = useState([]);
  // useEffect( , [])
  //useEffect(()=>{},[])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div>
      <h1>Users Data</h1>
      <p>{users.length}</p>
      {/* {
        users.map(user => <li>{user.name}</li>)
      } */}

      {
        users.map(user => <UserData name={user.name} email={user.email}></UserData>)
      }
    </div>
  )
}

function UserData(props) {
  return (
    <div style={{ border: '2px solid red', margin: '4px' }}>
      <h1>Name:{props.name}</h1>

      <p>Email:{props.email}</p>
    </div>
  )
}

// function Count() {
//   // const abc = useState(9);
//   const [count, setCount] = useState(1);
//   console.log(count)
//   const increaseCount = () => setCount(count + 1);
//   // const increaseCount = () => {
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }

//   const decreaseValue = () => setCount(count - 1);

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increaseCount} >Increase</button>
//       <br />
//       <button onClick={decreaseValue}> Decrease</button>
//     </div>
//   )
// }

export default App;
