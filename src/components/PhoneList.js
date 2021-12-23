import React from "react";
import PhoneCard from "./PhoneCard";

const PhoneList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderPhoneList = props.contacts.map((contact) => {
    return (
      <PhoneCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">{renderPhoneList}</div>;
};

export default PhoneList;

// import * as React from 'react';
// import List from '@mui/material/List';
// import PhoneCard from './PhoneCard';

// const PhoneList = (props) => {
    
//       const renderPhoneList = props.contacts.map((contact) => {
//             return <PhoneCard contact={contact} key={contact.id}/>;
//     })
//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                 {renderPhoneList}
//         </List>
//     );
// }

// export default PhoneList;
