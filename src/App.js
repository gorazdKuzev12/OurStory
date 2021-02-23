import React, { Component } from 'react';
import Computer from './containers/Computer/Computer'
import StartingButton from './componets/StartingButton/StartingButton'
import classes from './App.css'
import Navigation from './componets/Navigation/Navigation'
class App extends Component {
  state = {
    computers: [
      { name: 'Asus', startingPrice: 500, year: 2019 },
      { name: 'Dell', startingPrice: 600, year: 2020 },
      { name: 'Apple', startingPrice: 800, year: 2021 },
      { name: 'Acer', startingPrice: 400, year: 2018 },
      { name: 'HP', startingPrice: 400, year: 2019 },
      { name: 'Lenovo', startingPrice: 450, year: 2020 }
    ],
    showComputers: false
  }
  startButtonHandler = () => {
    this.setState({ showComputers: true })
  }

  render() {


    let start = null;

    if (this.state.showComputers === false) {
      start = (<StartingButton startApproved={this.startButtonHandler} />)
    }


    let computers = null;
    if (this.state.showComputers) {
      computers = (
      <div>
        <Navigation/>
      <div className={classes.flexContainer}>
      
        {this.state.computers.map(computer=>{
          return  <Computer
          name={computer.name}
          startingPrice={computer.startingPrice}
          year={computer.year} />
        })}
      </div>
      </div>

      )
    }



    return (
      <div className="App">
      
        {computers}
        {start}



      </div>
    );
  }
}

export default App;
