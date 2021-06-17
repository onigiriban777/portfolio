import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import { AiOutlineBehance } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Avatar from '@material-ui/core/Avatar';
import './navbarw.css';
import Logo from '../img/logo.png'
import Link from '@material-ui/core/Link';

export default function NavBar() {


    return (
                <AppBar>
                    <Toolbar id='nav-bar'>
                    <Avatar src={Logo}  id='avatar-logo' />
                    <div id='nav-links'>
                       <a href='#about-section' className='links'><Typography className='main-links'>About me</Typography></a>
                       <a href='#projects-section' className='links'><Typography className='main-links'>Projects</Typography></a>
                    </div>
                    <div className='social-icons'>
                            <Link href="https://www.linkedin.com/in/lramirezji/" target='_blank' className='links'><AiOutlineLinkedin /></Link>
                            <Link href="https://www.behance.net/LRJI" target='_blank' className='links'><AiOutlineBehance /></Link>
                    </div>
                    </Toolbar>
                </AppBar>
    )
}