import React, { useState } from "react";
const InsertExample = () => {
  const [Data, SetData] = useState([1, 2, 3, 4, 5]);
  function change() {
    SetData([...Data, 6]);
  }
  return (
    <>
      {Data.map((ele, index) => (
        <h1 key={index}>{ele}</h1>
      ))}
      <button onClick={change}>Insert</button>
    </>
  );
};
export default InsertExample;