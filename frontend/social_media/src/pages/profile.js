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

    var user =  JSON.parse(localStorage.getItem("user"));

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
    user.profile_pic = e.target.files[0].name;
    localStorage.setItem("user",JSON.stringify(user));
    setuserdata(user); 
  }
  // function change profile photo end


  // make a state to store the requested posts data
  const [posts , setPosts] = useState([]);
  // get all posts function start
  function getPosts(){
    axios.get(`http://localhost/react-project/backend/post/posts.php?${user.id}`)
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
  seteditpostid(id);
  console.log(content,"content",id,"id");
  seteditpostcontent(content);
};

// func to save changes on certin post
const handleEditPostSubmit  = async (e) => {
  e.preventDefault();
  const formEditData = new FormData();
  formEditData.append("post_content", inputs['post_content']);
  formEditData.append("post_id", editpostid);
  formEditData.append("file", file);
  console.log(formEditData);
  try {
    const response = await axios.post(
      "http://localhost/react-project/backend/post/postEdit.php", formEditData
    );
    console.log(response.data);
    // window.location.assign('/home');
  } catch (error) {
    console.error(error);
  }
  getPosts();
  document.getElementById(`editPostForm`).style.display = 'none';
  document.getElementById(`editPostBTN`).style.display = 'block';

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

  // console.log(file,"file");
    return (
       
<div>
  <div className="theme-layout">
  <Navbar pic= {userdata.profile_pic?userdata.profile_pic:""}/>
    <section>
      <div className="feature-photo">
        <figure>
          {/* this cover photo must read from local storage if not found we must give it a no cover photo is set or any other photo*/}
          <img src={userdata.cover_pic?require("../components/images/cover_pics/"+userdata.cover_pic):require("../components/images/cover_pics/coverphotoplaceholder.jpg")} alt="" className='cover' />
          </figure>
        {/* <div className="add-btn">
          <a href="#" title data-ripple>Add Friend</a>
        </div> */}
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
                  <img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/avatarphotoplaceholder.png")} alt=""  className='avatar'/>
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
                    <a className href="/Groups" title data-ripple>Groups</a>
                    <a className href="/EditProfile" title data-ripple>Edit Profile</a> 
                    <a className href="/SingleGroup" title data-ripple>SingleGroup</a>
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
                <WritePost userpic = {userdata.profile_pic} userid = {userdata.id} newpost={getPosts}/>
                {/* Write post end*/}
                {/* add post new box */}
                <div className="loadMore">
{/* new form to edit */}
  <div className="central-meta" id='editPostForm' style={{display : 'none'}}>
    <div className="new-postbox">
      <div>Edite Your Post</div>
      {/* <figure>
        <img src={props.userpic?require("../components/images/profile_pics/"+props.userpic):require("../components/ images/profile_pics/avatarphotoplaceholder.png")} alt="" />
      </figure> */}
      <div className="newpst-input">
        <form  onSubmit={handleEditPostSubmit}>
          <textarea defaultValue={editpostcontent} 
      id='editPostInput'
      onChange={() => handleEditPost(editpostid)}/>
          <div className="attachments">
            <ul>
              <li>
                <i className="fa fa-image" style={{color:"blue"}}/>
                <label className="fileContainer">
                  <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </label>
              </li>
              <li>
                <button type="submit">update</button>
                <button style={{background : 'red' , color : 'white'}} onClick={()=>{canclePostEdit(editpostid)}}   type='button'>Cancle</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
{/* new form to edit */}

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
</div>
            
    );
}

export default Profile;
