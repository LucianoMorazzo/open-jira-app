import React,{ useContext } from 'react'

import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {

    const { sidemenuOpen, openSidebar, closeSidebar } = useContext( UIContext );

  return (
    <Drawer
        anchor="left"
        open={ sidemenuOpen }
        onClose={ closeSidebar }
    >
        <Box sx={{ width: 250 }}>
            <Box
                sx={{ padding: '5px 10px' }}
            >
                <Typography variant='h4'>Menu</Typography>
            </Box>
            <List>
                {
                    menuItems.map( (item, index)  => (
                        <ListItemButton key={ item }>
                            <ListItemIcon>
                                { index % 2 ? <InboxIcon /> : <EmailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={ item } />
                        </ListItemButton>
                    ))
                }
            </List>

            <Divider />

            <List>
                {
                    menuItems.map( (item, index)  => (
                        <ListItemButton key={ item }>
                            <ListItemIcon>
                                { index % 2 ? <InboxIcon /> : <EmailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={ item } />
                        </ListItemButton>
                    ))
                }
            </List>
        </Box>
       
    </Drawer>
  )
}
