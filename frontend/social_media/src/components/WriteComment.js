import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { json } from 'react-router';
import { IoIosSend } from 'react-icons/io';

function WriteComment(props) {
  const [userdata,setuserdata]=useState (JSON.parse(localStorage.getItem("user")));
  const handlesubmitcommint = (e) => {
    e.preventDefault();
    if (e.target.comment.value != ""){
      const commentdata = {
        content : e.target.comment.value,
        user_id : userdata.id,
        post_id : props.data.post_id,
      }
      axios.post(
        "http://localhost/react-project/backend/post/newcomment.php", JSON.stringify(commentdata) 
      ).then(
        // props.newcomment
      );
    }
    
  };
  return (
    <div>
        <br/>
        <li>
													<a href="#" title="" class="showmore underline">more comments</a>
												</li>
                        <br/>
      <li className="post-comment">
    
    <div className="comet-avatar">
<img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/avatarphotoplaceholder.png")} alt="" />
   </div>
   
<div className="post-comt-box">
<form onSubmit={handlesubmitcommint}>
<textarea placeholder="Post your comment" defaultValue={""} name="comment"/>


  <button type="submit"><IoIosSend style={{fontSize:"28px",marginTop:"20px"}}/></button>
        </form>	
    </div>
          </li>
       </div>
        );
};

export default WriteComment
