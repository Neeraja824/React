import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./App";
import "./Cards.css";

function Cards() {
  const { dataList } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  const filteredData = dataList.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="cards-page">
      <div className="cards-header">
        <h2>Products</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or brand"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link to="/form" className="btn small">+ Add New</Link>
      </div>
      {filteredData.length === 0 ? (
        <div className="empty-state">
          <p>No matching products found. Try a different keyword.</p>
        </div>
      ) : (
        <div className="card-grid">
          {filteredData.map((item, idx) => (
            <Link key={idx} to={`/product/${idx}`} className="product-card">
              <div className="media-wrap">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="product-image" />
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
              </div>
              <div className="product-body">
                <h3 className="product-brand">{item.brand}</h3>
                <p className="product-price">₹{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default Cards;
