import React from 'react';
import {AiTwotoneHome} from 'react-icons/ai';

const Navbar = (props) => {
    const userdata = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="topbar stick">
            {/* logo  */}
            <div className="logo">
            <a title href="newsfeed.html"><img src="images/logo.png" alt="" style={{width:'200px'}} /></a>
            </div>
           
            <div className="top-area">
                <div className="user-img">
                <AiTwotoneHome className='homeicon'/>
                <a href='/profile'>   <img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" className='imgNav' />  </a>
                </div>
            </div>
         </div>
    );
}

export default Navbar;
