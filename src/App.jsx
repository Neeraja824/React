// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Card from './ProductCards.jsx';
// import ProductInfo from './ProductInfo.jsx';
// import './ProductCards.css';
// import Image from './Image.jsx';

// function App() {
//   return (
//     <BrowserRouter>
//     <Image />
//       <Routes>
//         <Route path="/" element={<Card />} />
//         <Route path="/products/:id" element={<ProductInfo />} />
//         <Route path="/" element={<Header />} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/cards" element={<Cards />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// import React from "react";
//  import Apex from "./Apex.jsx"; 
// import Salary from "./AverageSalary.jsx";
// import StatsCards from "./StatsCards.jsx";
// import Apexchart from "./Apexchart.jsx";
// import Column from "./Column.jsx";
// import Donut from "./Donut.jsx";
// import Academic from "./Academic.jsx"
// import Multiple from "./Multiple.jsx";
// import "./Dashboard.css";
// import Table from "./Table.jsx";
// function App(){
//   return (
//     <>
//     {/* <Apex />  */}
//     <div className="card">
//       <StatsCards />
//     </div>
//     <div className="card">
//       <Apexchart />
//       </div>
//       <div className="card">
//       <Table />
//       </div>
//       <div className="card">
//         <Salary />
//       </div>
//       <div className="card">
//         <Donut />
//       </div>
//       <div className="card">
//         <Column />
//       </div>
//       <div className="card">
//         <Academic />
//       </div>
//       <div className="card">
//         <Multiple />
//       </div>
//     </>
//   );
// }

// export default App;
// import React, { useState, createContext } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header.jsx";
// import Form from "./Forms.jsx";
// import Cards from "./Cards.jsx";
// import ProductInfo from "./ProductInfo.jsx";
// import "./App.css";

// export const ProductContext = createContext();

// function App() {
//   const [dataList, setDataList] = useState([]);

//   return (
//     <ProductContext.Provider value={{ dataList, setDataList }}>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<div></div>} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/cards" element={<Cards />} />
//           <Route path="/product/:id" element={<ProductInfo />} />
//         </Routes>
//       </BrowserRouter>
//     </ProductContext.Provider>
//   );
// }

// export default App;



// import React from "react";
// import AddOns from "./AddOn's.jsx";
// function App() {
//   return(
//     <AddOns />
//   )
// }
// export default App;


// import React from 'react';
// import { NameProvider } from './NameContext';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import Component3 from './Component3';
// import Component4 from './Component4';
// import Component5 from './Component5';
// function App() {
//     return (
//         <NameProvider>
//             <div>
//                 <Component1 />
//                 <Component2 />
//                 {/* <Component3 />
//                 <Component4 />
//                 <Component5 /> */}
//             </div>
//         </NameProvider>
//     );
// }
// export default App;

// import React from "react";
// import axios from "axios";
// import "./App.css";
// function App(){
//   let baseURL="http://localhost:7000";
//   const fetchData=()=>{
//     axios.get(`${baseURL}/get-students`)
//     .then((result)=> console.log(result.data))
//     .catch((error)=> console.log(error))
//   };
//   let myuser={
//     name: "Aditya",
//     roll: "143"
//   };
//   const addStudents=()=>{
//     axios.post(`${baseURL}/add-students`, myuser)
//     .then((result)=> console.log(result.data))
//     .catch((error)=> console.log(error))
//   };
//   return(
//     <>
//     <h1>This is my Frontend Project!!</h1>
//     <button onClick={fetchData}>Fetch Data</button>
//     <button onClick={addStudents}>Add Students</button>
//     </>
//   )
// }
// export default App;


// import StudentForm from "./StudentForm.jsx";
// import React from "react";
// import "./App.css";
// function App() {
//   return (
//     <div style={{ padding: "30px",fontSize:"10px" }}>
//       <h3>Add Student</h3>
//       <StudentForm />
//     </div>
//   );
// }
// export default App;


// import axios from "axios";
// function App() {
//   const [data, setData] = useState(null);
//   const makeCall = async () => {
//     try {
//       const result = await axios.get("http://localhost:9000/get-data");
//       setData(result.data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };
//   return (
//     <>
//       <button onClick={makeCall}>Make API Call</button>

//       {
//         data ? <h1>{data}</h1> : <h1>Call not instantiated</h1>
//       }
//     </>
//   );
// }
// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Home from "./Home";
// import GetData from "./GetData";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/getdata" element={<GetData />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;


import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);
  const upload = async () => {
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append("file", data[i]);
    }
    try {
      const result=await axios.post("http://localhost:9000/file-upload", formData);
      setImg(result.data.filename);
      alert("Successfully uploaded");
    } catch (error) {
      console.log("Failed to upload", error);
    }
  };

  return (
    <>
      <input
        type="file"
        multiple
        onChange={(e) => setData(e.target.files)}
      />

      {img ? (
        <img
          src={`http://localhost:9000/${img}`}
          alt="uploaded"
          width="200"
        />
      ) : (
        <h1>No Image</h1>
      )}

      <button onClick={upload}>Upload</button>
    </>
  );
}

export default App;
