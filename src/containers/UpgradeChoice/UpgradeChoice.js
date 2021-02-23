import React, { Component } from 'react'
import classes from './UpgradeChoice.css'


class UpgradeChoice extends Component {

    state = {

        graphics: [
            { name: "GeForce_GTX_1080_Ti", price: 150 },
            { name: "GeForce_GTX_TITAN_Z", price: 200 },
            { name: "TITAN_X", price: 130 }

        ],
        ram: [
            { name: "8GB RAM", price: 50 },
            { name: "16GB RAM", price: 85 }]
        ,
        extras: [
            { name: "Mouse", price: 20 },
            { name: "Keyboard", price: 30 },
            { name: "Speakers", price: 60 },
            { name: "Headphones", price: 40 },
            { name: "Extra Charger", price: 20 }],
        totalPrice:0,
        purchasable: false,
        purchasing: false

    }


    priceAddition= ()=> {
        let totalPrice = this.props.startingPrice;
        totalPrice+=this.state.graphics.price;
        this.setState( { totalPrice:totalPrice} );
    }

 
    

    render() {

      

        let graphics = null;
        graphics = (<div >

            {this.state.graphics.map(graphic => {
                return <div className={classes.flexContainer}><h3 className={classes.UpgradeChoiceH3}>{graphic.name}: {graphic.price}$</h3>
                   <buton onClick={this.props.priceAddition} className={classes.UpgradeChoiceButton} >+</buton> </div>


            })}
        </div>)


        let ram = null;
        ram = (<div >

            {this.state.ram.map(ram => {
                return <div className={classes.flexContainer}> <h3 className={classes.UpgradeChoiceH3}>{ram.name}: {ram.price}$</h3>
                   <buton className={classes.UpgradeChoiceButton} >+</buton>
                   </div>


            })}
        </div>)

        let extras = null;
        extras = (<div >

            {this.state.extras.map(extra => {
                return <div className={classes.flexContainer}> <h3 className={classes.UpgradeChoiceH3}>{extra.name}: <strong>{extra.price}$</strong></h3>
                    <buton className={classes.UpgradeChoiceButton} >+</buton> </div>

            })}
        </div>)

        return (
            <div  className={classes.UpgradeChoiceDiv}>
                <h1 className={classes.UpgradeChoiceH1}>Upgrade your computer</h1>
                <h2 className={classes.UpgradeChoiceH2}>Graphics</h2>
                {graphics}
                <h2 className={classes.UpgradeChoiceH2}>RAM</h2>
                {ram}
                <h2 className={classes.UpgradeChoiceH2}>Extras</h2>
                {extras}
                <h1 className={classes.UpgradeChoiceH1}>PRICE: {this.props.startingPrice}$</h1>
                


            </div>
        )
    }

}

export default UpgradeChoice;