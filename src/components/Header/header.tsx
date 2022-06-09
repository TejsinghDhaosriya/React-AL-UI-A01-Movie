import React from "react";
import "./header.css";

interface Props {
  name: string;
}
const Header = (props: Props) => {
  return (
    <div className="header">
      <h1 className="header-title">{props.name}</h1>
    </div>
  );
};

export default Header;
