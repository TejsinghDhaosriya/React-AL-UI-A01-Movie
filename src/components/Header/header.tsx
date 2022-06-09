import React from "react";
import "./header.css";

interface Props {
  name: string;
}
const Header = (props: Props) => {
  return (
    <div className="header">
      <h2 className="header-title">{props.name}</h2>
    </div>
  );
};

export default Header;
