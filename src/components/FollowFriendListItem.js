import React, {Component} from 'react';
import '../styles/FollowFriendListItem.css'

class FollowFriendListItem extends Component {
    render() {
        return <div class="recommended-friends-content">
                    <div class="recommended-friends-content-left">
                      <img src="https://cdn.hyperdev.com/drag-in-files.svg?v=1477153069954"/>
                    </div>
                    <div class="recommended-friends-content-center">
                      <p class="name">Phong0809</p>
                      <p class="suggest">Gợi ý cho bạn</p>
                    </div>
                    <div class="recommended-friends-content-right">
                      <p>Xem tất cả</p>
                    </div> 
                  </div> ;
    }
}

export default FollowFriendListItem;