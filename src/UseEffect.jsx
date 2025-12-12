import { useEffect, useState } from 'react';
import './App.css';
function UseEffectExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect triggered... Count is:", count);
  }, [count]);
  const handleAddUser = () => {
    setCount(prev => prev + 1); 
  };
  return (
    <div>
      <label>First name:</label>
      <input type="text" name="firstname" />
      <br />
      <label>Last name:</label>
      <input type="text" name="lastname" />
      <br />
      <label>Email:</label>
      <input type="email" name="email" />
      <br />
      <button type="button" onClick={handleAddUser}>Add User</button>
      <p>Users Added: {count}</p>
    </div>
  );
}
export default UseEffectExample;