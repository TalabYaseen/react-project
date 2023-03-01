import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import WritePost from '../components/writePost';
import Like from '../components/Like';
import InfoPost from '../components/InfoPost';
import ShowComment from '../components/ShowComment';
import WriteComment from '../components/WriteComment';
import Post from '../components/Post';
import axios from "axios";

const Profile = () => {
  // localStorage.setItem("user", JSON.stringify({
  //   id:7,
  //   first_name:"talab",
  //   last_name:"yaseen",
  //   email:7,
  //   password:7,
  //   phone:7,
  //   profile_pic:"",
  //   cover_pic:"",
  // }))
  const [userdata,setuserdata]=useState (JSON.parse(localStorage.getItem("user")))
  // console.log (userdata,"userdata")

  // function change cover photo start
  const  changecoverphoto = async (e) => {
    const formEditData = new FormData();
    formEditData.append("userid", userdata.id);
    formEditData.append("coverphoto", e.target.files[0]);
    try {
      const response = await axios.post(
        "http://localhost/react-project/backend/user/editecoverpic.php", formEditData
      );
      // console.log(response.data);
    } catch (error) {
      // console.error(error);
    }

    var user =  JSON.parse(localStorage.getItem("user"));
    user.cover_pic = e.target.files[0].name;
    localStorage.setItem("user",JSON.stringify(user));
    setuserdata(user);
  }
    // function change cover photo end


    // function change profile photo start
    const changecprofilephoto = async (e) => {
      const formEditData = new FormData();
      formEditData.append("userid", userdata.id);
      formEditData.append("profilephoto", e.target.files[0]);
      try {
        const response = await axios.post(
          "http://localhost/react-project/backend/user/editeprofilepic.php", formEditData
        );
        console.log(response.data);
      } catch (error) {
        // console.error(error);
      }
    var user =  JSON.parse(localStorage.getItem("user"));
    user.profile_pic = e.target.files[0].name;
    localStorage.setItem("user",JSON.stringify(user));
    setuserdata(user); 
  }
  // function change profile photo end


  // make a state to store the requested posts data
  const [posts , setPosts] = useState([]);
  // get all posts function start
  function getPosts(){
    axios.get(`http://localhost/react-project/backend/post/posts.php`)
    .then(response => {
        setPosts(response.data);
    })
}
// get all posts function end
// using hook to store all posts and comments data and rerender the page
useEffect(()=>{
  getPosts();
  // getComments();
} , [])


const [editpostid,seteditpostid]= useState(0);
const [editpostcontent,seteditpostcontent]= useState("");
// edite post
const choosePostToEdit = (id,content) => {
  // document.getElementById(`post`).style.display = 'none';
  document.getElementById(`editPostForm`).style.display = 'block';
  document.getElementById(`editPostBTN`).style.display = 'none';
  console.log(id);
  console.log(content);
};

// func to save changes on certin post
const handleEditPostSubmit  = async (e) => {
  e.preventDefault();
  const formEditData = new FormData();
  formEditData.append("post_content", inputs['post_content']);
  formEditData.append("post_id", inputs['post_id']);
  formEditData.append("file", file);
  console.log(formEditData);
  try {
    const response = await axios.post(
      "http://localhost/react-project/backend/post/postEdit.php", formEditData
    );
    console.log(response.data);
    window.location.assign('/home');
  } catch (error) {
    console.error(error);
  }
};
// لحفظ الداتا التي يدخلها المستخدم في الفورم الخاص بتعديل البوست
const handleEditPost = (id) => {
  const post_id = id;
  const value = document.getElementById(`editPostInput`).value;
  setInputs({'post_content': value , 'post_id' : post_id})
}
// اخفاء فورم تعديل البوست
    const canclePostEdit = (id) => {
    // document.getElementById(`post`).style.display = 'block';
    document.getElementById(`editPostForm`).style.display = 'none';
    document.getElementById(`editPostBTN`).style.display = 'inline-block';
    document.getElementById(`imgPost`).style.display = 'block';
  }

    // تعريف ستات لتخزين الداتا لتعديل أي بوست
    const [inputs , setInputs] = useState("");
    const [file, setFile] = useState(null);

  console.log(posts,"posts");
    return (
       
                <div>
                  <div className="theme-layout">
                  <Navbar/>
                    <section>
                      <div className="feature-photo">
                        <figure>
                          {/* this cover photo must read from local storage if not found we must give it a no cover photo is set or any other photo*/}
                          <img src={userdata.cover_pic?require("../components/images/cover_pics/"+userdata.cover_pic):require("../components/images/cover_pics/coverphotoplaceholder.png")} alt="" />
                          </figure>
                        <div className="add-btn">
                          <a href="#" title data-ripple>Add Friend</a>
                        </div>
                        <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Cover Photo
                            <input type="file" onChange={changecoverphoto}/>
                          </label>
                        </form>
                        <div className="container-fluid">
                          <div className="row merged">
                            <div className="col-lg-2 col-sm-3">
                              <div className="user-avatar">
                                <figure>
                                  {/* same as cover pic for profile pic */}
                                  <img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
                                  <form className="edit-phto">
                                    <i className="fa fa-camera-retro" />
                                    <label className="fileContainer">
                                      Edit Display Photo
                                      <input type="file"  onChange={changecprofilephoto}/>
                                    </label>
                                  </form>
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
                                  <li>
                                    <a className="active" href="/profile" title data-ripple> My Profile</a>
                                    <a className href="timeline-friends.html" title data-ripple>Friends</a>
                                    <a className href="/Groups" title data-ripple>Groups</a>
                                    <a className href="/EditProfile" title data-ripple>Edit Profile</a> 
                                    <a className href="/SingleGroup" title data-ripple>SingleGroup</a>
                                    <a className href="/chat" title data-ripple>Chat</a>

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
                                
                                {/* Write post start*/}
                                <WritePost userpic = {userdata.profile_pic} userid = {userdata.id}/>
                                {/* Write post end*/}


                                {/* add post new box */}
                                <div className="loadMore">
{/*POSTS*/}
{/* this form to edite post  */}
<form id='editPostForm' action="" style={{display : 'none'}} onSubmit={handleEditPostSubmit}>

  <textarea 
    style={{width: '50vw'}} 
    type="text" 
    defaultValue={editpostcontent} 
    id='editPostInput'
    onChange={() => handleEditPost(editpostid)}/>
  <input 
    type="file"
    id="file"
    onChange={(e) => setFile(e.target.files[0])}/>
  <br />
  <button type='submit'>Update</button>
  <button style={{background : 'red' , color : 'white'}} onClick={()=>{canclePostEdit(editpostid)}}  type='button'>Cancle</button>
</form>
{/* this form to edite post  */}
                                {posts.map(e => <Post choosePostToEdit={choosePostToEdit} data={e} />)}
                                  
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

export default Profile;
