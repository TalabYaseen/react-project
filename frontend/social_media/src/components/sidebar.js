import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-lg-3">
        <aside className="sidebar static">
          <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
              <li>
                <i className="ti-files" />
                <a href="fav-page.html" title>My Group</a>
              </li>
              <li> 
                <i className="ti-user" />
                <a href="timeline-friends.html" title>friends</a>
              </li>
              <li> 
                <i className="ti-user" />
                <Link to={"/findfriends"}>find friends</Link>
                
              </li>
              <li>
                <i className="ti-comments-smiley" />
                <a href="messages.html" title>Messages</a>
              </li>
              <li>
                <i className="ti-bell" />
                <a href="notifications.html" title> Reqiset Frind</a>
              </li>
              <li>
                <i className="ti-power-off" />
               <Link to="/Login">Logout </Link> 
              </li>
            </ul>
          </div>{/* Shortcuts */}
        </aside>
      </div>
    );
}

export default Sidebar;
