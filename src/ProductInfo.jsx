import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./App";
import "./Cards.css";

function ProductInfo() {
  const { dataList } = useContext(ProductContext);
  const { id } = useParams();
  const product = dataList[Number(id)];
  const navigate = useNavigate();

  if (!product) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Product not found</h2>
        <button className="btn small" onClick={() => navigate("/cards")}>Back to list</button>
      </div>
    );
  }

  return (
    <main className="detail-page">
      <div className="info-card-lg">
        <div className="info-media">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="image-placeholder-large">No Image</div>
          )}
        </div>
        <div className="info-body">
          <h1 className="info-title">{product.name}</h1>
          <p className="info-sub"><strong>Brand:</strong> {product.brand}</p>
          <p className="info-sub"><strong>Size:</strong> {product.size || "—"}</p>
          <p className="info-price">₹{product.price}</p>
          <div className="info-desc">
            <strong>Description:</strong>
            <p>{product.description || "No description provided."}</p>
          </div>
          <div className="detail-actions">
            <button className="btn primary" onClick={() => navigate("/cards")}>
              Back to list
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductInfo;
