import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Home, Engineering } from '@mui/icons-material';
import { Link } from 'react-router-dom'

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Link to='www.egnaidi.xyz'>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Engineering sx={{color:"white"}}/>
          </IconButton>
        </Link>
        <Link to={'/'}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Home sx={{color:"white"}}/>
          </IconButton>
        </Link>
          <Typography variant="h6" color="inherit" component="div">
            Telefonbuch
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}