import React from 'react';

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
                <i className="ti-comments-smiley" />
                <a href="messages.html" title>Messages</a>
              </li>
              <li>
                <i className="ti-bell" />
                <a href="notifications.html" title>Notifications or Reqiset Frind</a>
              </li>
              <li>
                <i className="ti-power-off" />
                <a href="landing.html" title>Logout</a>
              </li>
            </ul>
          </div>{/* Shortcuts */}
        </aside>
      </div>
    );
}

export default Sidebar;
