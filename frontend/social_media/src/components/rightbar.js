import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { json } from 'react-router';
import { Link } from 'react-router-dom';


const Rightbar = () => {

  const [userfreinds,setuserfreinds] = useState([]);
function getuserfriends(){
  axios.get(`http://localhost/react-project/backend/friend/friend.php?${JSON.parse(localStorage.getItem("user")).id}`)
  .then(response => {
    setuserfreinds(response.data);
    console.log(response.data,"freinds")
    // console.log(response.data[0].first_name,"klsfdhgok")
  })
}
useEffect(()=>{
  getuserfriends();
} , [])
    return (
        
        <div className="col-lg-3">
                              <aside className="sidebar static">
                                {/* <div className="widget">
                                </div> */}
                                <div className="widget friend-list stick-widget">
                                  <h4 className="widget-title">Friends</h4>
                                  <div id="searchDir" />
                                  <ul id="people-list" className="friendz-list">
                                    {(userfreinds != []) ? userfreinds.map(e=>{
                                      return(
                                        <Link to={`/Elseprofile/${e.id}`}>
                                        <li>
                                      <figure>
                                        <img src={e.profile_pic?require("./images/profile_pics/"+e.profile_pic):require("../components/images/profile_pics/avatarphotoplaceholder.png")} alt="" />
                                        <span className="status f-online" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">{e.first_name} {e.last_name}</a>
                                      </div>
                                    </li></Link>)}):<>no friends</>}
                                    
                                    {/* <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar2.jpg" alt="" />
                                        <span className="status f-away" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">Sarah Loren</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b4d6d5c6dad1c7f4d3d9d5ddd89ad7dbd9">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li> */}
                                    {/* <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar3.jpg" alt="" />
                                        <span className="status f-off" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">jason borne</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d777c6e72737f5d7a707c7471337e7270">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li>
                                    <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar4.jpg" alt="" />
                                        <span className="status f-off" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">Cameron diaz</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bed4dfcdd1d0dcfed9d3dfd7d290ddd1d3">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li>
                                    <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar5.jpg" alt="" />
                                        <span className="status f-online" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">daniel warber</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="553f34263a3b37153238343c397b363a38">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li>
                                    <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar6.jpg" alt="" />
                                        <span className="status f-away" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">andrew</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5933382a36373b193e34383035773a3634">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li>
                                    <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar7.jpg" alt="" />
                                        <span className="status f-off" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">amy watson</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5933382a36373b193e34383035773a3634">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li>
                                    <li>
                                      <figure>
                                        <img src="images/resources/friend-avatar5.jpg" alt="" />
                                        <span className="status f-online" />
                                      </figure>
                                      <div className="friendz-meta">
                                        <a href="time-line.html">daniel warber</a>
                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dbb1baa8b4b5b99bbcb6bab2b7f5b8b4b6">[email&nbsp;protected]</a></i>
                                      </div>
                                    </li> */}
                                  
                                  </ul>
                                  <div className="chat-box">
                                    <div className="chat-head">
                                      <span className="status f-online" />
                                      <h6>Bucky Barnes</h6>
                                      <div className="more">
                                        <span><i className="ti-more-alt" /></span>
                                        <span className="close-mesage"><i className="ti-close" /></span>
                                      </div>
                                    </div>
                                    <div className="chat-list">
                                    </div>
                                  </div>
                                </div>{/* friends list sidebar */}
                              </aside>
                            </div>
    );
}

export default Rightbar;
