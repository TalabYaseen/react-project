import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { json } from 'react-router';

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
      <li className="post-comment">
                                            <div className="comet-avatar">
                                              <img src={userdata.profile_pic?require("../components/images/profile_pics/"+userdata.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
                                            </div>
                                            <div className="post-comt-box">
                                              <form onSubmit={handlesubmitcommint}>
                                                <textarea placeholder="Post your comment" defaultValue={""} name="comment"/>
                                                <div className="add-smiles">
                                                  <span className="em em-expressionless" title="add icon" />
                                                </div>
                                                <div className="smiles-bunch">
                                                  <i className="em em---1" />
                                                  <i className="em em-smiley" />
                                                  <i className="em em-anguished" />
                                                  <i className="em em-laughing" />
                                                  <i className="em em-angry" />
                                                  <i className="em em-astonished" />
                                                  <i className="em em-blush" />
                                                  <i className="em em-disappointed" />
                                                  <i className="em em-worried" />
                                                  <i className="em em-kissing_heart" />
                                                  <i className="em em-rage" />
                                                  <i className="em em-stuck_out_tongue" />
                                                </div>
                                                <button type="submit">go</button>
                                              </form>	
                                            </div>
                                          </li>
    </div>
  );
};

export default WriteComment
