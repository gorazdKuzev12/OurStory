import React, { Component } from 'react';
import Computer from './Computer/Computer'
import StartingButton from './StartingButton/StartingButton'
import classes from './App.css'
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
      computers = (<div className={classes.flexContainer}>
        {this.state.computers.map(computer=>{
          return  <Computer
          name={computer.name}
          startingPrice={computer.startingPrice}
          year={computer.year} />
        })}
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
