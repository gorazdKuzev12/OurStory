import React from 'react'
import classes from './UpgradeButton.css'
const upgradeComputer = props => (

    <div className={classes.flexContainer}>
        <h3 className={classes.Price}>PRICE:{props.startingPrice}$</h3>
        <button className={classes.UpgradeButton} onClick = {props.upgrading}>UPGRADE NOW</button>
    </div>
)
export default upgradeComputer;