import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class LoginForm extends Component {
  state = { 
    email: '',
    password: ''
  }

  onChange = (event) =>{
    this.setState({[event.target.name]: event.target.value});
  }


  render() { 
    const { email, password } = this.state;
    return ( 
      <form id="login-form" className="text-center">
        <div className="form-row">
          <input type="email" id="email" name="email" value= {email} placeholder="Email" required onChange={this.onChange} />
        </div>
        <div className="form-row">
          <input type="password" id="pwd" name="password" value={password} placeholder="Password" required onChange={this.onChange} />
        </div>
        <button type="submit" className="btn lg is-outlined mb-14">Login</button>
        <div>
          <Link to='/reset'>Forgot Password?</Link>
        </div>
      </form>
     );
  }
}