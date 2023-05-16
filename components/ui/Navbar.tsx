import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { FC, useContext } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui';

export const Navbar:FC = () => {

  const { openSidebar } = useContext(UIContext)

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={ openSidebar }
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant='h6'>Open Jira</Typography> 
        </Toolbar>
    </AppBar>
  )
}
