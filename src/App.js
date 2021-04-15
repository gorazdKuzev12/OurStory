import React, { Component } from 'react';
import Categories from './containers/Categories/Categories'
import StartingButton from './componets/StartingButton/StartingButton'
import classes from './App.css'
import Navigation from './componets/Navigation/Navigation'
import Register from './componets/Navigation/Register/Register'
import Login from './componets/Navigation/Login/Login'

class App extends Component {
  state = {
    categories: [
      { name: 'Family', year: 2019 },
      { name: 'Friends', year: 2020 },
      { name: 'MyDay', year: 2021 },
      { name: 'Colors', year: 2018 },
      { name: 'Feelings', year: 2019 },
      { name: 'Job', year: 2020 }
    ],
    showComputers: true,
    showRegister: false,
    showLogin: false
  }
  startButtonHandler = () => {
    this.setState({ showComputers: true })
  }
  startRegisterButtonHandler = () => {
    this.setState({ showRegister: true, showComputers: false, showLogin: false })
  }

  startLoginButtonHandler = () => {
    this.setState({ showLogin: true, showComputers: false, showRegister: false })
  }

  render() {


    let start = null;



    let categories = null;
    if (this.state.showComputers) {
      categories = (
        <div>
          <Navigation registerApproved={this.startRegisterButtonHandler} loginApproved={this.startLoginButtonHandler}/>
          <div className={classes.flexContainer}>

            {this.state.categories.map(category => {
              return <Categories
                name={category.name}
                startingPrice={category.startingPrice}
                year={category.year} />
            })}
          </div>
        </div>

      )
    }

    let register = null;
    if (this.state.showRegister) {
      register = (
        <div>
          <Navigation registerApproved={this.startRegisterButtonHandler} loginApproved={this.startLoginButtonHandler} />
          <Register />
        </div>

      )
    }
    let login = null;
    if (this.state.showLogin) {
      login = (
        <div>
          <Navigation registerApproved={this.startRegisterButtonHandler} loginApproved={this.startLoginButtonHandler} />
          <Login />
        </div>

      )
    }




    return (
      <div className="App">

        {categories}
        {register}

        {start}
        {login}


      </div>
    );
  }
}

export default App;
