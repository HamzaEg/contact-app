import React from "react";
import user from "../images/user.png";

const PhoneDetail = (props) => {
  const {name, phone} = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{phone}</div>          
        </div>
      </div>
    </div>
  );
};
export default PhoneDetail;
