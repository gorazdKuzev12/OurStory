import React,{Component} from 'react'
import classes from './Computer.css'
import asus from '../images/asus.jpg'
import apple from '../images/apple.jpg'
import lenovo from '../images/lenovo.jpg'
import dell from '../images/dell.jpg'
import hp from '../images/hp.jpg'
import acer from '../images/acer.jpg'
import UpgradeButton from '../UpradeButton/UpgradeButton'
import Modal from '../Modal/Modal'

class Computer extends Component  {
    state ={
        upgrading: false
    }


    upgradeHandler = () =>{
        this.setState({upgrading:true})
    }
    upgradeCancledHandler = () =>{
        this.setState({upgrading:false})
    }
   render(){
    let imageDisplay = null;
    switch (this.props.name) {
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
    let upgrade;
    if(this.state.upgrading === true){
        upgrade = (<Modal upgrading ={this.state.upgrading} startingPrice={this.props.startingPrice} clicked={this.upgradeCancledHandler}/>);

    }
    return (
        <div className={classes.flexContainer}>
            <h1 className={classes.ComputerH1}>{this.props.name}</h1>
            {imageDisplay}
            <h2 className={classes.ComputerH2}>{this.props.year}</h2>
            <UpgradeButton startingPrice={this.props.startingPrice} upgrading={this.upgradeHandler} ></UpgradeButton>
            {upgrade}
        </div>)
   }

}

export default Computer;