import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './projects.css'

export default function Projects() {



    return (
        <React.Fragment>
            <Grid container spacing={0} id='projects-section'>
                <Grid Item xs={12} >
                    <Typography className='projects-title'>Check my Code!</Typography>
                </Grid>
                <Grid item xs={12} lg={4} className='full-card'>
                <a href='https://onigiriban777.github.io/pokedex/' target='_blank' className='project-card'>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className='card-img'
                            component="img"
                            alt=" "
                            height="140"
                            image="https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            title="Pokemon"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Pokédex
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Remember the good old PokeDex? It´s Back! But in ReactJs form!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>

                <Grid item xs={12} lg={4} className='full-card'>
                <a href='https://creepy-appsta.web.app/' target='_blank' className='project-card'>
                    <Card >
                        <CardActionArea>
                            <CardMedia
                            className='card-img'
                            component="img"
                            alt=" "
                            height="140"
                            image="https://images.pexels.com/photos/1690081/pexels-photo-1690081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            title="Creepy Appsta"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Creepy Appsta
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Ig Clone App for horror fans made with React and Firebase.
                                    (Register and Login to comment!)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>

                <Grid item xs={12} lg={4} className='full-card'>
                <a  target='_blank' href='https://onigiriban777.github.io/calculadora/' className='project-card'>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className='card-img'
                            component="img"
                            alt=" "
                            height="140"
                            image="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            title="Calculator"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Calculator
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                There comes a time in every man's life when he needs a calculator. Try this one.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
 
                <Grid item xs={12} lg={4} className='full-card'>
                <a target='_blank' href="https://onigiriban777.github.io/joyland/" className='project-card'>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className='card-img'
                            component="img"
                            alt=" "
                            height="140"
                            image="https://images.pexels.com/photos/4219882/pexels-photo-4219882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            title="Joystick-Lando"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Joystick-Lando
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Visit the very first worldwide online store for used Gamepads. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
{/* 
                <Grid item xs={12} lg={4} className='full-card'>
                <a target='_blank' className='project-card'>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className='card-img'
                            component="img"
                            alt=" "
                            height="140"
                            image="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            title="Lazer"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Lazer Magazine fans Quotes
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Need inspiration? Read wise words of readers of one of the best Magazines in the world.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
*/}
                <Grid item xs={12} lg={4} className='full-card'>
                <a target='_blank' href='https://onigiriban777.github.io/drums/' className='project-card'>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className='card-img'
                            component="img"
                            alt=" "
                            height="140"
                            image="https://images.pexels.com/photos/4090903/pexels-photo-4090903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            title="Groovy Drums"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Groovy Drums
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Let the music in tonight. Just turn on the music. Let the music of your life. Give life back to music…
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>


                </Grid>
                
            </Grid>
        </React.Fragment>
    )
}