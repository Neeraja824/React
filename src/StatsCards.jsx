import React from "react";
import "./StatsCards.css";
import {
  FaUserGraduate,
  FaBuilding,
  FaRupeeSign,
  FaUserTie,
} from "react-icons/fa";

const StatsCard = ({ title, value, change, color, icon: Icon }) => {
  const isPositive = !change.startsWith("-");
  return (
    <div className="stats-card">
      <div className="stats-left">
        <h2 className="stats-value">{value}</h2>
        <p className="stats-title">{title}</p>
        <span className={`stats-change ${isPositive ? "positive" : "negative"}`}>
          {change}
        </span>
      </div>

      <div className="stats-icon" style={{ backgroundColor: `${color}20` }}>
        <Icon size={28} color={color} />
      </div>
    </div>
  );
};

const StatsCards = () => {
  const cards = [
    {
      title: "Placed Students",
      value: "245",
      change: "+12.5%",
      color: "#10b981",
      icon: FaUserGraduate, 
    },
    {
      title: "Ongoing Drives",
      value: "12",
      change: "+3.2%",
      color: "#3b82f6",
      icon: FaBuilding, 
    },
    {
      title: "Average Package",
      value: "₹6.8 LPA",
      change: "+5.4%",
      color: "#f59e0b",
      icon: FaRupeeSign, 
    },
    {
  title: "Hiring Partners",
  value: "18",
  change: "+2.1%",
  color: "#8b5cf6",
  icon: FaUserTie, 
   }
  ];
  return (
  <div className="dashboard">
    <h1 className="dashboard-title">Placement Analytics Dashboard</h1>
    <div className="stats-container">
      {cards.map((card, index) => (
        <StatsCard key={index} {...card} />
      ))}
    </div>
  </div>
);
};

export default StatsCards;
