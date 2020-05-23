import React, {Component} from 'react';
import '../styles/LoginForm.css'

class LoginForm extends Component {
    render() {
        return <div class="login-form">
                  <h2>Sign in</h2>
                  <div class="login-form-input">
                    <input type="text" placeholder={this.props.email}/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <button class="login-form-button-signin">Signip to Coders-X</button>
                    <br/>
                    <input type="checkbox" value="" id="keep"/>
                    <label for="keep">Keep me signed in</label>
                    <br/>
                  </div>
                  <div class="login-form-forgot">
                    <label><a href="">Forgot username?</a></label>
                    <label><a href="">Forgot password?</a></label>
                  </div>
               </div>;
    }
}

export default LoginForm;