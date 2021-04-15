import React from 'react'
import classes from './StartingButton.css'
const register = props => (
    <div className={classes.StartingButtonDiv}>
        <p className={classes.StartingButtonP}>Do you want to create your personal computer?</p>
        <button className={classes.StartingButton} onClick = {props.startApproved}>Start Now</button>
    </div>
)
export default register;