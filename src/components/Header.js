import React, {Component} from 'react';
import '../styles/Header.css'

class Header extends Component {
    render() {
        return <div class="recommended-friends">
                  <div class="recommended-friends-header">
                    <div class="recommended-friends-header-left">
                      <p>Gợi ý cho bạn</p>
                    </div>
                    <div class="recommended-friends-header-right">
                      <p>Xem tất cả</p>
                    </div> 
                  </div> 
                  <div class="recommended-friends-content">
                    <div class="recommended-friends-content-left">
                      <img src="https://cdn.hyperdev.com/drag-in-files.svg?v=1477153069954"/>
                    </div>
                    <div class="recommended-friends-content-center">
                      <p>Phong0809</p>
                      <p>Gợi ý cho bạn</p>
                    </div>
                    <div class="recommended-friends-content-right">
                      <p>Xem tất cả</p>
                    </div> 
                  </div> 
               </div>;
    }
}

export default Header;