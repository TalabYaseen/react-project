import React, { useEffect, useState } from 'react'
import axios from 'axios';

const WritePost = (props) => {
  const [postcontent,setpostcontent] = useState("");
  const [postimg,setpostimg] = useState("");
  const handelsubmitpost = async (e) => {
    e.preventDefault();
    const formEditData = new FormData();
    formEditData.append("post_content", postcontent);
    formEditData.append("user_id", props.userid);
    formEditData.append("file", postimg);

    try {
      const response = await axios.post(
        "http://localhost/react-project/backend/post/posts.php", formEditData
      );
      console.log(response.data);
      // window.location.assign('/home');
      setpostcontent("")
    } catch (error) {
      console.error(error);
    }

  }
  return (
<>
<div className="central-meta">
                                  <div className="new-postbox">
                                    <figure>
                                      <img src={props.userpic?require("../components/images/profile_pics/"+props.userpic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
                                    </figure>
                                    <div className="newpst-input">
                                      <form method="post" onSubmit={handelsubmitpost}>
                                        <textarea rows={2} placeholder="write something" defaultValue={""}  onChange={(e)=>setpostcontent(e.target.value)}/>
                                        <div className="attachments">
                                          <ul>
                                            {/* <li>
                                              <i className="fa fa-music" style={{color:"red"}} />
                                              <label className="fileContainer">
                                                <input type="file" />
                                              </label>
                                            </li> */}
                                            <li>
                                              <i className="fa fa-image" style={{color:"black" , fontSize:"25px" }}/>
                                              <label className="fileContainer">
                                                <input type="file" onChange={(e)=>setpostimg(e.target.files[0])}/>
                                              </label>
                                            </li>
                                            <li>
                                              <button type="submit" style={{width:"70px"}}>Post</button>
                                            </li>
                                          </ul>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
</>
  )
}

export default WritePost
