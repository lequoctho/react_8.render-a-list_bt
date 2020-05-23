import React, {Component} from 'react';
import 

class Header extends Component {
    render() {
        return <div class="header">
                  <div class="header-left">
                    <p>Go back</p>
                  </div> 
                  <div class="header-center">
                    <p>CodersX</p>
                  </div>
                  <div class="header-right">
                    <button>Sign up</button>
                  </div> 
               </div>;
    }
}

export default Header;