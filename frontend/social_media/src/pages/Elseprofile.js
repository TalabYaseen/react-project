import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import WritePost from '../components/writePost';
import Like from '../components/Like';
import InfoPost from '../components/InfoPost';
import ShowComment from '../components/ShowComment';
import WriteComment from '../components/WriteComment';
import EPost from '../components/EPost';
import axios from "axios";
import { useParams } from 'react-router';


const current_ID = JSON.parse(localStorage.getItem("user")).id
const Elseprofile = () => {
  const {id} = useParams();
  var friendId = id;
  console.log(friendId,"friendId")
  const [state,setstata] = useState("new")
  const [userdata,setuserdata] = useState({})
  const getuserdata = () =>{
    axios.get(`http://localhost/react-project/backend/profile/user.php/${id}`)
    .then(response => {
      setuserdata(response.data);
      console.log(response.data)
    })
  }

  const getrelation = () => {
    axios.get(`http://localhost/react-project/backend/friend/relation.php/${id}/${current_ID}`)
    .then(response => {
      if (response.data){setstata(response.data)}
      console.log(response.data,"response.data")
      ;})
  }

  useEffect(()=>{
    getuserdata();
    getrelation();
    getPosts();
  } , [])
  console.log(userdata);
  console.log(state);


   //  pending وحالته بتكون friends  اضافة صديق جديد في جدول ال 
   const AddFriends = () => {
    let inputs = {user_id:current_ID , friend_id:friendId};
    console.log(inputs,"inputs")
    axios.post(`http://localhost/react-project/backend/friend/friends.php/save`,inputs)
    .then((respone)=>{
      setstata("sender");
      getrelation();
        // getUsers();
        // getFriendsPending();
        // getFriendsRequest();
        // window.location.assign(`/profile/${profile_id}`);
    })


    
}

// status الموافقة على طلب الصداقة وتغيير ال 
const AcceptFriend = () => {
    let inputs = {user_id:current_ID , friend_id:friendId};
    axios.put(`http://localhost/react-project/backend/friend/friends.php/edit`,inputs)
    .then((respone)=>{
      setstata("friend");
      getrelation();
        // getFriendsPending();
        // getFriendsAccepted();
        // getFriendsRequest();
        // window.location.assign(`/profile/${profile_id}`)
    })


    
}

// الغاء ارسال طلب الصداقة
const removeRequest = () => {
    let inputs = {user_id:current_ID , friend_id:friendId};
    axios.put(`http://localhost/react-project/backend/friend/removeRequest.php/edit`,inputs)
    .then((respone)=>{
      setstata("new");
      getrelation();
        // getFriendsPending();
        // getFriendsAccepted();
        // window.location.assign(`/profile/${profile_id}`)
    })


    
}

// حذف الصداقة
const removeFriend = () => {
    let friendId = id;
    let inputs = {user_id:current_ID , friend_id:friendId};
    axios.put(`http://localhost/react-project/backend/friend/removeFriends.php`,inputs)
    .then((respone)=>{
      setstata("new");
      getrelation();
        // getFriendsPending();
        // getFriendsAccepted();
        // window.location.assign(`/profile/${profile_id}`)   
    })

}

const [posts , setPosts] = useState([]);
function getPosts(){
  axios.get(`http://localhost/react-project/backend/post/posts.php?${friendId}`)
  .then(response => {
      setPosts(response.data);
  })
}
console.log(state,"state")
  return (

    <div>
      <div className="theme-layout">
      <Navbar/>
        <section>
          <div className="feature-photo">
            <figure>
              {/* this cover photo must read from local storage if not found we must give it a no cover photo is set or any other photo*/}
              <img src={userdata.cover_pic?require("../components/images/cover_pics/"+userdata.cover_pic):require("../components/images/cover_pics/coverphotoplaceholder.jpg")} alt="" />
              </figure>
              { (state === "friend") ? <div className="add-btn"><button onClick={()=>removeFriend()}>Delete Friend</button></div>:<div></div>}
              { (state === "receiver") ? <div className="add-btn"><button onClick={()=>AcceptFriend()}>Accept</button><button onClick={()=>removeRequest()}>Reject</button></div>:<div></div>}
              { (state === "sender") ? <div className="add-btn"><button onClick={()=>removeRequest()}>Cancel Request</button></div>:<div></div>}
              { (state === "new") ? <div className="add-btn"><button onClick={()=>AddFriends()}>Add Friend</button></div>:<div></div>}
            <div className="container-fluid">
              <div className="row merged">
                <div className="col-lg-2 col-sm-3">
                  <div className="user-avatar">
                    <figure>
                      {/* same as cover pic for profile pic */}
                      <img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/avatarphotoplaceholder.png")} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-10 col-sm-9">
                  <div className="timeline-info">
                    <ul>
                      <li className="admin-name">
                        <h5>{userdata.first_name} {userdata.last_name}</h5>
                        {/* <span>Group Admin</span> */}
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
                    {/* add post new box */}
                    <div className="loadMore">
{/*POSTS*/}
                    {/* {(state === "friend") ? posts.map(e => <EPost data={e} userdata={userdata}/>):<></>} */}
                    {posts.map(e => <EPost data={e} userdata={userdata}/>)}
                      
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

);
}

export default Elseprofile;
