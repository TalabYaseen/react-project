import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState } from "react";

export default function Profile() {

  const [userdata,setuserdata]= useState(JSON.parse(localStorage.getItem(('user'))));
  return (
    
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={userdata.profile_pic}
                alt=""
              />
              <img
                className="profileUserImg"
                src={userdata.cover_pic}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{userdata.first_name} {userdata.last_name}</h4>
                <span className="profileInfoDesc">{userdata.pio}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}