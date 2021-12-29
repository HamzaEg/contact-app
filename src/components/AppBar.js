import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material/';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'



export default function DenseAppBar(props) {
 const [resourceId, setResourceId] = React.useState('');

  const handleChange = (event) => {
    setResourceId(event.target.value);
    props.toggleResource(event.target.value)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Link to={'/'}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeIcon sx={{color:"white"}}/>
          </IconButton>
        </Link>
          <Typography variant="h6" color="inherit" component="div">
            Telefonbuch - {resourceId} 
          </Typography>
                <FormControl required sx={{ m: 1, minWidth: 120 }}>

        <InputLabel id="demo-simple-select-required-label">resourceId</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={resourceId}
          label="ResourceId *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='LocalStorage'>LocalStorage</MenuItem>
          <MenuItem value='server-json-api'>server-json-api</MenuItem>
          <MenuItem value='jsonplaceholder'>jsonplaceholder</MenuItem>
        </Select>
      </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}