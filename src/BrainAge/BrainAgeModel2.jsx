//explore selectsex


import "./brainAge.css";

import { 
    FormControl, 
    FormControlLabel, 
    RadioGroup, 
    Switch, 
    Box, 
    InputLabel,
    Select,
    MenuItem, 
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';

export default function BrainAgeModel2Page(props) {
    // true = female
    const [gender, setGender] = React.useState('');
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const [age, setAge] = React.useState('');
    const handleAgeChange = (event) => {
        setAge(event.target.value);
        
    };

    function renderUrl() {
        return "https://brainage.shinyapps.io/brainage_" + gender + "_decade" + age + "/";
    }

    return(
        <sections>
            <Header></Header>
            <nav>
                <Link to='/brainAge'><span>Generate Developmental BrainAGE from your sample</span></Link>
                <Link to='/brainAge2'><span>Generate BrainAGE for different age groups from your sample</span></Link>
                <div className="animation start-ownData"></div>
            </nav>
        
            <Grid container spacing={3} style={{alignItems: 'center', marginTop: "0.2rem"}}>
                <Grid item xs={12} md={1}></Grid>

                <Grid item xs={12} md={1} style={{marginLeft: "30px"}}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="MM-label">Select Sex</InputLabel>
                            <Select
                                labelId="MM-label"
                                id="MM-select"
                                value={gender}
                                label="2-10"
                                onChange={handleGenderChange}
                            >
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"male"}>Male</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12} md={1} style={{marginLeft: "30px"}}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="MM-label">Select Age</InputLabel>
                            <Select
                                labelId="MM-label"
                                id="MM-select"
                                value={age}
                                label="2-10"
                                onChange={handleAgeChange}
                            >
                                <MenuItem value={"1"}>3-10</MenuItem>
                                <MenuItem value={"2"}>11-20</MenuItem>
                                <MenuItem value={"3"}>21-30</MenuItem>
                                <MenuItem value={"4"}>31-40</MenuItem>
                                <MenuItem value={"5"}>41-50</MenuItem>
                                <MenuItem value={"6"}>51-60</MenuItem>
                                <MenuItem value={"7"}>61-70</MenuItem>
                                <MenuItem value={"8"}>71-80</MenuItem>
                                <MenuItem value={"9"}>81-90</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

            </Grid>
            
 
            
            <Grid container spacing={3} style={{alignItems: 'center'}}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={10}>
                    <div style={{alignItems: 'center'}}>
                        <Iframe url={renderUrl()} width="100%" height="1000px"></Iframe>
                    </div>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>

        </sections>
    );
}