import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image'
import logo from '../../assets/emploitic-logo.png'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
export default function CustomAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:"transparent"}} elevation={0}>
                <Toolbar>
                    <Image
                      src={logo}
                      width={300}
                      height={100}
                      alt="Picture of the author"
                    />

                    <Box sx={{flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                        <Button variant="text" startIcon={<NotificationsNoneOutlinedIcon />}>
                            Notification
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
