import React from "react";
import "./footer.css";
const Footer:React.FC = () => {
  return (
    <div className="footer">
      <span className="material-symbols-outlined">store</span>
      <span className="material-symbols-outlined">shopping_bag</span>
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="material-symbols-outlined">person</span>
    </div>
  );
};

export default Footer;
