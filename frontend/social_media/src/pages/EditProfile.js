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
import axios from "axios";
import  { useState , useEffect  } from 'react';
import { useNavigate } from 'react-router';



const EditProfile = () => {
  const [rerender,setrerender]= useState(false);
  const haschanged = () => {
    // setrerender(!rerender)
    setUser((localStorage.getItem('user')));

  }
  const [user , setUser] = useState({});
  var data = localStorage.getItem('user');
     data = JSON.parse(data);
  useEffect(()=>{
    //  update
    //  update
    //  update
    //  update
     setUser((data));
     console.log(data,"data");
  },[rerender])
    const navigate = useNavigate();
    const [id , setId ] = useState('');
    const [first_name , setFirst ] = useState('');
    const [last_name , setLast ] = useState('');
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [city , setCity ] = useState('');
    const [country , setCountry ] = useState('');
    const [about , setAbout ] = useState('');

    
    const handleId = (e) => {
      setId(e.target.value)
    }
    const handleFirst = (e) => {
        setFirst(e.target.value)
    } 
    const handleLast = (e) => {
        setLast(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleCity = (e) => {
      setCity(e.target.value)
    }
    const handleCountry = (e) => {
      setCountry(e.target.value)
    }
    const handleAbout = (e) => {
      setAbout(e.target.value)
    }



  // byan

  const [userdata,setuserdata]=useState (JSON.parse(localStorage.getItem("user")));
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

    var userdd =  JSON.parse(localStorage.getItem("user"));
    userdd.cover_pic = e.target.files[0].name;
    localStorage.setItem("user",JSON.stringify(userdd));
    setuserdata(userdd);
  }
    // function change cover photo end

     var userdata2 =  JSON.parse(localStorage.getItem("user"));

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

                         <Editprofile haschanged={haschanged}/>


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
  )}


export default EditProfile

