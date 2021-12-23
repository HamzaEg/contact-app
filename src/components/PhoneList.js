import React from "react";
import PhoneCard from "./PhoneCard";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'


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
  return (
    <div className="ui celled list">
     <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h2" color="initial">Phone List</Typography>
        <Link to="/add">
        <Button  variant="contained">
          Add Phone
        </Button>
        </Link>
      </Box>

    
      {renderPhoneList}
    </div>
    );
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
