import React, {Component} from 'react';
import '../styles/Header.css'
import FollowFriendListItem from './FollowFriendListItem';

class Header extends Component {
    constructor() {
      super();
      this.users = [
        "Phong0809",
        "Thinh0606",
        "Thong0303"
      ];
    }
    
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
                  {
                    
                  }
                  <FollowFriendListItem user=""/>
               </div>;
    }
}

export default Header;