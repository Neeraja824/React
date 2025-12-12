import React, { useState } from "react";
const DeleteExample = () => {
  const [Data, SetData] = useState([1, 2, 3, 4, 5]);
  function deleteItem(index) {
    SetData(Data.filter((_, i) => i !== index));
  }
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {Data.map((ele, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "15px",
            width: "120px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{ele}</h2>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default DeleteExample;