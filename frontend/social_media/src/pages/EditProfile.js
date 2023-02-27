import React from 'react'
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import WritePost from '../components/writePost';
import Like from '../components/Like';
import InfoPost from '../components/InfoPost';
import ShowComment from '../components/ShowComment';
import WriteComment from '../components/WriteComment';
import Post from '../components/Post';
import Editprofile from '../components/Editprofile';

const EditProfile = () => {
  return (
    <div>
          <div>
                  <div className="theme-layout">
                  <Navbar/>
                    <section>
                      <div className="feature-photo">
                        <figure><img src="images/resources/timeline-1.jpg" alt="" /></figure>
                        <div className="add-btn">
                          <span>1205 followers</span>
                          <a href="#" title data-ripple>Add Friend</a>
                        </div>
                        <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Cover Photo
                            <input type="file" />
                          </label>
                        </form>
                        <div className="container-fluid">
                          <div className="row merged">
                            <div className="col-lg-2 col-sm-3">
                              <div className="user-avatar">
                                <figure>
                                  <img src="images/resources/user-avatar.jpg" alt="" />
                                  <form className="edit-phto">
                                    <i className="fa fa-camera-retro" />
                                    <label className="fileContainer">
                                      Edit Display Photo
                                      <input type="file" />
                                    </label>
                                  </form>
                                </figure>
                              </div>
                            </div>
                            <div className="col-lg-10 col-sm-9">
                              <div className="timeline-info">
                                <ul>
                                  <li className="admin-name">
                                    <h5>Janice Griffith</h5>
                                    <span>Group Admin</span>
                                  </li>
                                  <li>
                                    <a className="active" href="time-line.html" title data-ripple>time line</a>
                                    <a className href="timeline-photos.html" title data-ripple>Photos</a>
                                    <a className href="timeline-videos.html" title data-ripple>Videos</a>
                                    <a className href="timeline-friends.html" title data-ripple>Friends</a>
                                    <a className href="timeline-groups.html" title data-ripple>Groups</a>
                                    <a className href="about.html" title data-ripple>about</a>
                                    <a className href="#" title data-ripple>more</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>{/* top area */}
                    <section>
                    <div className="gap gray-bg">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row" id="page-contents">
                            <Sidebar/>
                              <div className="col-lg-6">
                                
                                
                         
                         <Editprofile/>


                                {/* add post new box */}
                                <div className="loadMore">
                             
                                
                                  
                                </div>
                              </div>{/* centerl meta */}
                              <Rightbar/>
                            </div>	
                          </div>
                        </div>
                      </div>
                    </div>	
                  </section>
                   
                    <div className="bottombar">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            {/* <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span> */}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="side-panel">
                    <h4 className="panel-title">General Setting</h4>
                    <form method="post">
                      <div className="setting-row">
                        <span>use night mode</span>
                        <input type="checkbox" id="nightmode1" /> 
                        <label htmlFor="nightmode1" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Notifications</span>
                        <input type="checkbox" id="switch22" /> 
                        <label htmlFor="switch22" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Notification sound</span>
                        <input type="checkbox" id="switch33" /> 
                        <label htmlFor="switch33" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>My profile</span>
                        <input type="checkbox" id="switch44" /> 
                        <label htmlFor="switch44" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Show profile</span>
                        <input type="checkbox" id="switch55" /> 
                        <label htmlFor="switch55" data-on-label="ON" data-off-label="OFF" />
                      </div>
                    </form>
                    <h4 className="panel-title">Account Setting</h4>
                    <form method="post">
                      <div className="setting-row">
                        <span>Sub users</span>
                        <input type="checkbox" id="switch66" /> 
                        <label htmlFor="switch66" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>personal account</span>
                        <input type="checkbox" id="switch77" /> 
                        <label htmlFor="switch77" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Business account</span>
                        <input type="checkbox" id="switch88" /> 
                        <label htmlFor="switch88" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Show me online</span>
                        <input type="checkbox" id="switch99" /> 
                        <label htmlFor="switch99" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Delete history</span>
                        <input type="checkbox" id="switch101" /> 
                        <label htmlFor="switch101" data-on-label="ON" data-off-label="OFF" />
                      </div>
                      <div className="setting-row">
                        <span>Expose author name</span>
                        <input type="checkbox" id="switch111" /> 
                        <label htmlFor="switch111" data-on-label="ON" data-off-label="OFF" />
                      </div>
                    </form>
                  </div>{/* side panel */}
                </div>
    </div>
  )
}

export default EditProfile












