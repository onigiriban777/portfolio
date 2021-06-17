import React from 'react';
import Paper from '@material-ui/core/Paper';
import './hero.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Hero() {


    return (
        <React.Fragment>
            <Paper id='hero' elevation={0} >
                <Grid container spacing={0} className='hero-text' >
                    <Grid item xs={12} >
                        <Typography id='title'>I'm Juan Ignacio</Typography>
                    </Grid>
                    <Grid item item xs={12} >
                        <Typography id='sub-title'>Behavior Analyst, Front End Developer & Video Game Programmer</Typography>
                    </Grid>
                    <Grid item item xs={12}>
                        <a href='#projects-section' className='button-a'><Button color='primary' variant='outlined' id='main-button'>Projects</Button></a>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}