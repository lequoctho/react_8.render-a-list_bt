import React, {Component} from 'react';
import '../styles/Header.css'

class LoginForm extends Component {
    render() {
        return <div class="login-form">
                  <h2>Sign in</h2>
                  <div class="login-form-input">
                    <input type="text" placeholder="Username"/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <button>Signip to Coders-X</button>
                    <br/>
                    <input type="checkbox" value="" id="keep"/>
                    <label for="keep">Keep me signed in</label>
                    <br/>
                    <label><a href="">Forgot username?</a></label>
                    <label><a href="">Forgot password?</a></label>
                  </div>
                  <div class="header-right">
                    <button>Sign up</button>
                  </div> 
               </div>;
    }
}

export default LoginForm;