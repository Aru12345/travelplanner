import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar,Toolbar,Typography,InputBase,Box } from "@mui/material";


const Header = () =>{
    return(
        <AppBar position="static"> 
            <Toolbar >
                <Typography variant="h5" >
                    Travel Planner

                </Typography>
                <Box display="flex">
                <Typography variant="h6" >
                    Explore new destinations

                </Typography>
                {/* <Autocomplete> */}
                    <div >
                        <div >

                        </div>
                        <InputBase placeholder="Search ..." />

                    </div>
                {/* </Autocomplete> */}

                </Box>


            </Toolbar>
        </AppBar>
    )
}
export default Header;