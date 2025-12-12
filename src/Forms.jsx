import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./App";
import "./Forms.css";

function Form() {
  const { dataList, setDataList } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    size: "",
    price: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.price) {
      alert("Please fill all required fields!");
      return;
    }
    setDataList([...dataList, formData]);
    alert("Form submitted successfully!");
    navigate("/cards");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      brand: "",
      size: "",
      price: "",
      description: "",
      image: null,
    });
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <label>Product Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter product name" />
        <label>Brand *</label>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Enter brand name" />
        <label>Size</label>
        <input type="number" name="size" value={formData.size} onChange={handleChange} placeholder="Enter size" />
        <label>Price *</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" />
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter description"></textarea>
        <label>Choose Image</label>
        <input type="file" name="image" onChange={handleChange} />
        <div className="btn-group">
          <button type="submit" className="btn-submit">Submit</button>
          <button type="button" className="btn-reset" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
