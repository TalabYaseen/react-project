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
           props.newpost();
      setpostcontent("");
    } catch (error) {
      console.error(error);
      setpostcontent("");
    }

  }
  return (
<>
                                  <div className="central-meta">
                                  <div className="new-postbox">
                                    <figure>
                                      <img src={JSON.parse(localStorage.getItem("user")).profile_pic?require("../components/images/profile_pics/"+JSON.parse(localStorage.getItem("user")).profile_pic):require("../components/images/profile_pics/avatarphotoplaceholder.png")} alt="" />
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
