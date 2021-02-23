import React from 'react'
import classes from './Navigation.css'
import logo from '../../images/logo.png'

const navigation = (props) => (
    <div  className={classes.NavigationDiv}>
        <nav>
            <ul className={classes.NavigationMenu}>
                <li className={classes.NavigationItem}><a href="">Creative TechCompany</a></li>
                <li className={classes.NavigationItem}><a href="">Home</a></li>
                <li className={classes.NavigationItem}><a href="">Mobile Phones</a></li>
                <li className={classes.NavigationItem}><a href="">About</a></li>
                <li className={classes.NavigationItem}><a href="">Contact Us</a></li>
                <li className={classes.NavigationLogo}><a href=""><img className={classes.ComputerImg} src={logo} alt="Computer" ></img></a></li>
                
            </ul>
        </nav>
    </div>
)

export default navigation;