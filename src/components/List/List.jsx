import React from "react";
import { useState } from "react";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
const List = ({places}) =>{

    const[type,setType]=useState('hotels');
    const[rating,setRating]=useState('0');
    
    return(
        <div>
            <Typography variant="h4">
                Hotels And Attractions!

            </Typography>
            <FormControl  style={{  minWidth: 120, marginBottom: '30px' }}>
                <InputLabel>
                <Select value={type} onChange={(e)=>{setType(e.target.value)}}>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>


                </Select>
                </InputLabel>

            </FormControl>
            <FormControl style={{  minWidth: 120, marginBottom: '30px' }}>
                <InputLabel>
                <Select value={rating} onChange={(e)=>{setRating(e.target.value)}}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
             
                   


                </Select>
                </InputLabel>

            </FormControl>
            <Grid container spacing={3}>
                {places?.map((place,i)=>(
                    <Grid item  key={i} xs={12} >
                        <PlaceDetails  place={place} />

                    </Grid>
                ))}

            </Grid>
        </div>
    )
}
export default List;