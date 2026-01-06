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


import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:3000/students";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [editId, setEditId] = useState(null);

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const getStudents = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setStudents(data);

    if (selectedStudent) {
      const updated = data.find(s => s.id === selectedStudent.id);
      setSelectedStudent(updated || null);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const saveStudent = async () => {
    if (name === "" || roll === "") {
      alert("Name and Roll required");
      return;
    }

    const student = { name, roll, phone, address };

    if (editId === null) {
      // POST
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
    } else {
      // PUT
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      setEditId(null);
    }

    // clear form
    setName("");
    setRoll("");
    setPhone("");
    setAddress("");

    getStudents();
  };

  // DELETE
  const deleteStudent = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setSelectedStudent(null);
    getStudents();
  };

  // EDIT
  const editStudent = (s) => {
    setEditId(s.id);
    setName(s.name);
    setRoll(s.roll);
    setPhone(s.phone);
    setAddress(s.address);
  };

  // VIEW
  const viewStudent = (s) => {
    setSelectedStudent(s);
  };

  return (
    <div className="container">
      <h2>Student Form</h2>

      <div className="form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button onClick={saveStudent}>
          {editId === null ? "Save" : "Update"}
        </button>
      </div>

      <hr />

      {/* STUDENT CARDS */}
      {students.length > 0 && (
        <>
          <h2>Students</h2>

          {students.map((s) => (
            <div className="card" key={s.id}>
              <b>{s.name}</b>
              <p>Roll: {s.roll}</p>

              <div className="buttons">
                <button onClick={() => viewStudent(s)}>View</button>
                <button onClick={() => editStudent(s)}>Edit</button>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* VIEW DETAILS BOX */}
      {selectedStudent && (
        <>
          <hr />
          <h2>Student Details</h2>

          <div className="card">
            <p><b>Name:</b> {selectedStudent.name}</p>
            <p><b>Roll:</b> {selectedStudent.roll}</p>
            <p><b>Phone:</b> {selectedStudent.phone}</p>
            <p><b>Address:</b> {selectedStudent.address}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
