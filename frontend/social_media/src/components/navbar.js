import React from 'react';


const Navbar = (props) => {
    const userdata = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="topbar stick">
            {/* logo  */}
            <div className="logo">
            <a title href="newsfeed.html"><img src="images/logo.png" alt="" style={{width:'150px'}} /></a>
            </div>
            <div className="top-area">
                <div className="user-img">
                <a href='/profile'>   <img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt=""  />  </a>
                </div>
            </div>
         </div>
    );
}

export default Navbar;
