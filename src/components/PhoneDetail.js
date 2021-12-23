import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const PhoneDetail = (props) => {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Hamza</div>
          <div className="description">cs.hamza@egnaidi.de</div>
        </div>
      </div>
    </div>
  );
};
export default PhoneDetail;
