import React from "react";

function ClientBox({ logo, name, per }) {
  return (
    <div className="box">
      <div className="box-head">
        <img src={logo} alt="" />
        <i className="fab fa-twitter"></i>
      </div>
      <div className="box-body">
        <p>
          Another quality React-based product from RedQ Team. Manage to turn
          highly complex tech into simple components.
        </p>
      </div>
      <div className="box-footer">
        <h4>{name}</h4>
        <p>{per}</p>
        <span>@RedQ</span>
      </div>
    </div>
  );
}

export default ClientBox;
