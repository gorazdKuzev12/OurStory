import React from 'react'
import classes from './Navigation.css'
import logo from '../../images/logo.png'

const navigation = (props) => (
    <div  className={classes.NavigationDiv}>
        <nav>
            <ul className={classes.NavigationMenu}>
                <li className={classes.NavigationItem}><a href="">Our Story</a></li>
                <li className={classes.NavigationItem}><a href="">Home</a></li>
                <li className={classes.NavigationItem}  onClick = {props.loginApproved}><a >Login</a></li>
                <li className={classes.NavigationItem}  onClick = {props.registerApproved}><a>Register</a></li>
                <li className={classes.NavigationItem}><a href="">About</a></li>
                
                
            </ul>
        </nav>
    </div>
)

export default navigation;