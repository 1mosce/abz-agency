import React from "react";
import Logo from "../../assets/Logo";

function Header() {
  return (
    <div className="header-wraper">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="button-wrapper">
        <button>Users</button>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default Header;
