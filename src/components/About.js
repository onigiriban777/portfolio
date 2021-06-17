import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import './about.css';

export default function About() {


    return (
        <React.Fragment>
            <Grid container justify='center' id='about-section'>
            <Grid Item container xs={12} justify='center' className='about-me'>
                <Grid Item xs={12} className='about-title'>About Me</Grid>
                <Grid item xs={12} className='about-text'>BS in Psychology, and
                Electronics Technician, passionate about Technology and Human Behavior.
                With foundations in low level programming achieved attending a Technical High School I constanetly continue developing my
                programming skills mainly in JavaScript and C#.
                I also develop as Academic Researcher in Serious Gaming, Bullying, CyberBullying, Trolling and Psychopathy.
                </Grid>
            </Grid>
     {/*Formal education Background*/}           
                <Grid Item container xs={12} justify='center' className='about-subtitle'>Educational Background</Grid>
                <Grid container item xs={12} lg={5} className='educational-box'>
                    <Grid item xs={12} className='educational-title'>Computer Science Related</Grid>
                    <Grid item container xs={12}>
                        <Typography className='educational-text'>Dip. in Front End Development</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                    <Grid item container xs={12}>
                        <Typography className='educational-text'>Dip. in Ux/Ui</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                    <Grid item container xs={12}>
                        <Typography className='educational-text'>Electronics technician</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                </Grid>
                <Grid container item lg={5} xs={12} className='educational-box'>
                    <Grid item xs={12} className='educational-title' >Behavior Analysis Related</Grid>
                    <Grid item container xs={12} >
                        <Typography className='educational-text'>Bs in Pschology</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                    <Grid item container xs={12}>
                        <Typography className='educational-text'>PGDip in ADHD</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                    <Grid item container xs={12}>
                        <Typography className='educational-text'>Dip. in Criminology</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} lg={5} className='educational-box'>
                    <Grid item xs={12} className='educational-title' >Other</Grid>
                    <Grid item container xs={12} >
                        <Typography className='educational-text'>BSBA</Typography>
                        <LinearProgress className='education-progress' value={80} variant='buffer'/>
                    </Grid>
                    <Grid item container xs={12}>
                        <Typography className='educational-text'>Fitness Instructor</Typography>
                        <LinearProgress className='education-progress' value={100} variant='buffer'/>
                    </Grid>
                </Grid>
                {/*Hobbies*/}
                <Grid Item container xs={12} justify='center' id='about-hobbies'>
                    <Grid item xs={12} className='about-subtitle'>Hobbies & Interests</Grid>
                    <Grid item xs={12} className='about-text'>I'm First Dan in Karate and have more than 10 years in the practice 
                    of Martial Arts. I'm an actor, and made appearences in shortfilms, independent theatre 
                    plays. I gave a lecture about Serious Games at the Argentina Game Show 2019. I was a 
                    guest speaker at a Radio Show about the Psychology of Serial Killers. 
                    そして,４年前から日本語勉強している。日本語は面白いですが、とてもむずかしいな！I am an 
                    enthusiastic photographer, I love Art History, Manga, Anime, and of course, Videogames</Grid>
                </Grid>
            </Grid>
        </React.Fragment>


    )
}