import React from 'react'
import register from '../../StartingButton/StartingButton'
import classes from './Login.css'
const login = props => (
<form >
  <div className={classes.container} >
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    <hr></hr>
  

    <button type="submit" className={classes.registerbtn}>Login</button>
  </div>
  

</form>
)
export default login;