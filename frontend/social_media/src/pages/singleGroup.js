import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Post from '../components/Post'
import Sidebar from '../components/sidebar'
import Rightbar from '../components/rightbar'
import WritePost from '../components/writePost'
import { useState } from 'react';
import axios from 'axios'

function SingleGroup() {
  localStorage.setItem("groupid",JSON.stringify("1"));
  const groupid= JSON.parse(localStorage.getItem("groupid"));
  const [posts , setPosts] = useState([]);
  const [members , setmembers] = useState([]);
  const [groupdata , setgroupdata] = useState({});
  function getPosts(){
    axios.get(`http://localhost/react-project/backend/post/groubposts.php?${groupid}`)
    .then(response => {
      console.log(response.data,"response.data")
        setPosts(response.data.posts);
        setmembers(response.data.members);
        setgroupdata(response.data.groupdata);
    })
}
  useEffect (
    ()=>{
      getPosts();
    }
  ,[])
  console.log(groupdata,"groupdata");

  return (
    <div>
         <div>
        <div className="theme-layout">
        
         <Navbar/>
          <section>
            <div className="feature-photo">
              <figure><img src={groupdata.image_cover?require("../components/images/groups_pics/"+groupdata.image_cover):require("../components/images/groups_pics/coverphotoplaceholder.png")} alt="" className='cover'/></figure>
              <div className="add-btn">
                <span>{members.length} Members</span>
                {/* <a href="#" title data-ripple>Join Group</a> */}
              </div>
              {/* <form className="edit-phto"> */}
                {/* <i className="fa fa-camera-retro" /> */}
                {/* <label className="fileContainer">
                  Edit Cover Photo
                  <input type="file" />
                </label> */}
              {/* </form> */}
              <div className="container-fluid">
                <div className="row merged">
                  <div className="col-lg-2 col-sm-3">
                    {/* <div className="user-avatar"> */}
                      {/* <figure> */}
                        {/* <img src="images/resources/user-avatar2.jpg" alt="" /> */}
                        {/* <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Display Photo
                            <input type="file" />
                          </label>
                        </form>
                      </figure> */}
                    {/* </div> */}
                  </div>
                  <div className="col-lg-10 col-sm-9">
                    <div className="timeline-info">
                      <ul>
                        <li className="admin-name">
                          <h5>{groupdata.name}</h5>
                          {/* <span>@amazonshop</span> */}
                        </li>
                        <li>
                                    <a className href="/profile" title data-ripple> My Profile</a>
                                    <a className href="timeline-friends.html" title data-ripple>Friends</a>
                                    <a className href="/Groups" title data-ripple>Groups</a>
                                    <a className href="/EditProfile" title data-ripple>Edit Profile</a> 
                                    <a className="active" href="/SingleGroup" title data-ripple>SingleGroup</a>
                                    <a className href="/chat" title data-ripple>Chat</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                     <Sidebar/>
                      <div className="col-lg-6">
                      <WritePost/>
                        <div className="loadMore">
                        {posts.map(e => <Post data={e}/>)}
                        </div>
                      </div>
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
                  {/* <i><img src="images/credit-cards.png" alt="" /></i> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
          </div>
    </div>
  )
}

export default SingleGroup
