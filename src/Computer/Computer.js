import React from 'react'
import classes from './Computer.css'
import asus from '../images/asus.jpg'
import apple from '../images/apple.jpg'
import lenovo from '../images/lenovo.jpg'
import dell from '../images/dell.jpg'
import hp from '../images/hp.jpg'
import acer from '../images/acer.jpg'



const computer = (props) => {
    let imageDisplay = null;
    switch (props.name) {
        case ('Asus'):
            imageDisplay = <img className={classes.ComputerImg} src={asus} alt="Computer" ></img>
            break;
        case ('Dell'):
            imageDisplay = <img className={classes.ComputerImg} src={dell} alt="Computer" ></img>
            break;
        case ('Apple'):
            imageDisplay = <img className={classes.ComputerImg} src={apple} alt="Computer" ></img>
            break;
        case ('Lenovo'):
            imageDisplay = <img className={classes.ComputerImg} src={lenovo} alt="Computer" ></img>
            break;
        case ('HP'):
            imageDisplay = <img className={classes.ComputerImg} src={hp} alt="Computer" ></img>
            break;
        case ('Acer'):
            imageDisplay = <img className={classes.ComputerImg} src={acer} alt="Computer" ></img>
            break;
        default:
            imageDisplay = <img src="../images/background.jpg" alt="Computer" ></img>

    }
    return (
        <div className={classes.flexContainer}>
            <h1 className={classes.ComputerH1}>{props.name}</h1>
            {imageDisplay}
            <h2 className={classes.ComputerH2}>{props.year}</h2>
            <h3 className={classes.ComputerH3}>Starting Price: <strong>{props.startingPrice}$</strong></h3>
        </div>)

}

export default computer;