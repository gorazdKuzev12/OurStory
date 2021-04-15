import React,{Component} from 'react'
import classes from './Categories.css'
import family from '../../images/family.jpg'
import job from '../../images/job.jpg'
import feelings from '../../images/feelings.jpg'
import color from '../../images/color.jpg'
import friends from '../../images/friends.jpg'
import day from '../../images/family.jpg'
import UpgradeButton from '../../componets/UpradeButton/UpgradeButton'
import Modal from '../../componets/Modal/Modal'

class Category extends Component  {
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
        case ('Family'):
            imageDisplay = <img className={classes.ComputerImg} src={family} alt="Category" ></img>
            break;
        case ('Colors'):
            imageDisplay = <img className={classes.ComputerImg} src={color} alt="Category" ></img>
            break;
        case ('Feelings'):
            imageDisplay = <img className={classes.ComputerImg} src={feelings} alt="Category" ></img>
            break;
        case ('Friends'):
            imageDisplay = <img className={classes.ComputerImg} src={friends} alt="Category" ></img>
            break;
        case ('Job'):
            imageDisplay = <img className={classes.ComputerImg} src={job} alt="Category" ></img>
            break;
        case ('MyDay'):
            imageDisplay = <img className={classes.ComputerImg} src={day} alt="Category" ></img>
            break;
        default:
            imageDisplay = <img src="../images/background.jpg" alt="Category" ></img>
    
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
            
        </div>)
   }

}

export default Category;