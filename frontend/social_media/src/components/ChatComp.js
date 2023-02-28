import React from 'react'

function ChatComp() {
  return (
    <div>
          <div className="central-meta">
          <div className="messages">
            <h5 className="f-title"><i className="ti-bell" />All Messages <span className="more-options"><i className="fa fa-ellipsis-h" /></span></h5>
            <div className="message-box">
              <ul className="peoples">
                <li>
                  <figure>
                    <img src="images/resources/friend-avatar2.jpg" alt="" />
                    <span className="status f-online" />
                  </figure>
                  <div className="people-name">
                    <span>Molly cyrus</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar3.jpg" alt="" />
                    <span className="status f-away" />
                  </figure>
                  <div className="people-name">
                    <span>Andrew</span>
                  </div>
                </li>
                <li>
                  <figure>
                    <img src="images/resources/friend-avatar.jpg" alt="" />
                    <span className="status f-online" />
                  </figure>
                  <div className="people-name">
                    <span>jason bourne</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar4.jpg" alt="" />
                    <span className="status off-online" />
                  </figure>
                  <div className="people-name">
                    <span>Sarah Grey</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar5.jpg" alt="" />
                    <span className="status f-online" />
                  </figure>
                  <div className="people-name">
                    <span>bill doe</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar6.jpg" alt="" />
                    <span className="status f-away" />
                  </figure>
                  <div className="people-name">
                    <span>shen cornery</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar7.jpg" alt="" />
                    <span className="status off-online" />
                  </figure>
                  <div className="people-name">
                    <span>kill bill</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar8.jpg" alt="" />
                    <span className="status f-online" />
                  </figure>
                  <div className="people-name">
                    <span>jasmin walia</span>
                  </div>
                </li>
                <li>
                  <figure><img src="images/resources/friend-avatar6.jpg" alt="" />
                    <span className="status f-online" />
                  </figure>
                  <div className="people-name">
                    <span>neclos cage</span>
                  </div>
                </li>
              </ul>
              <div className="peoples-mesg-box">
                <div className="conversation-head">
                  <figure><img src="images/resources/friend-avatar.jpg" alt="" /></figure>
                  <span>jason bourne <i>online</i></span>
                </div>
                <ul className="chatting-area">
                  <li className="you">
                    <figure><img src="images/resources/userlist-2.jpg" alt="" /></figure>
                    <p>what's liz short for? :)</p>
                  </li>
                  <li className="me">
                    <figure><img src="images/resources/userlist-1.jpg" alt="" /></figure>
                    <p>Elizabeth lol</p>
                  </li>
                  <li className="me">
                    <figure><img src="images/resources/userlist-1.jpg" alt="" /></figure>
                    <p>wanna know whats my second guess was?</p>
                  </li>
                  <li className="you">
                    <figure><img src="images/resources/userlist-2.jpg" alt="" /></figure>
                    <p>yes</p>
                  </li>
                  <li className="me">
                    <figure><img src="images/resources/userlist-1.jpg" alt="" /></figure>
                    <p>Disney's the lizard king</p>
                  </li>
                  <li className="me">
                    <figure><img src="images/resources/userlist-1.jpg" alt="" /></figure>
                    <p>i know him 5 years ago</p>
                  </li>
                  <li className="you">
                    <figure><img src="images/resources/userlist-2.jpg" alt="" /></figure>
                    <p>coooooooooool dude ;</p>
                  </li>
                </ul>
                <div className="message-text-container">
                  <form method="post">
                    <textarea defaultValue={""} />
                    <button title="send"><i className="fa fa-paper-plane" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChatComp







