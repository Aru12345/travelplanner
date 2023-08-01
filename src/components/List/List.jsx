import React from "react";
import { useState } from "react";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from "@mui/material";

const List = () =>{

    const[type,setType]=useState('hotels');
    const[rating,setRating]=useState('');
    return(
        <div>
            <Typography variant="h4">
                Hotels And Attractions!

            </Typography>
            <FormControl >
                <InputLabel>
                <Select value={type} onChange={(e)=>{setType(e.target.value)}}>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>


                </Select>
                </InputLabel>

            </FormControl>
            <FormControl >
                <InputLabel>
                <Select value={rating} onChange={(e)=>{setRating(e.target.value)}}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
             
                   


                </Select>
                </InputLabel>

            </FormControl>
        </div>
    )
}
export default List;