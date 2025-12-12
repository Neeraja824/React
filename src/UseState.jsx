import React, { useState } from "react";
const UseStateExample = () => {
  const [X, setX] = useState(true);
  function change() {
    setX(!X); 
  }
  return (
    <>
      {X ? <h1>Hello</h1> : <h1>Bye</h1>}
      <button onClick={change}>Change State</button>
    </>
  );
};
export default UseStateExample;