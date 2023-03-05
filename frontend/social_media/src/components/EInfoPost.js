import React from 'react'
import Like from './Like'
function EInfoPost(props) {
  console.log(props.data,"props.data.profile_pic")
  // this func make edite post appear
  const editPost = (id,content) => {
    // console.log("editepost");
    // document.getElementById(`post${props.data.post_id}`).style.display = 'none';
    // document.getElementById(`editPostForm${props.data.post_id}`).style.display = 'block';
    // document.getElementById(`editPostBTN${props.data.post_id}`).style.display = 'none';
    props.choosePostToEdit(id,content);
  }
  return (
    
    <div>
        <div className="friend-info">
                                        <figure>
                                          <img src={props.userdata.profile_pic?require("../components/images/profile_pics/"+props.userdata.profile_pic):require("../components/images/profile_pics/avatarphotoplaceholder.png")} alt="" />
                                        </figure>
                                        <div className="friend-name">
                                          <ins><a href="time-line.html" title>{props.userdata.first_name} {props.userdata.last_name}</a></ins>
                                          <span>published: {props.data.created_at}</span>
                                        </div>
                                        {/* delete and edit post if this is your post*/}
                                        {(props.data.id == JSON.parse(localStorage.getItem("user")).id) ?
                                        <div>
                                          {/* <button onClick={() => {deletePost(props.data.post_id)}}>Delete Your Post</button> */}
                                          <button id={`editPostBTN`} onClick={() => {editPost(props.data.post_id,props.data.content)}}>edite</button>
                                        </div>
                                        : null }
                                        <div className="post-meta">
                                          {props.data.post_image && <img src={require("../components/images/posts-pics/"+props.data.post_image)} alt="" />}
                                          <div className="description">
                                            <p>
                                            {props.data.content}
                                            </p>
                                          </div>
                                          <Like postid = {props.data.post_id}/>
                                        </div>
                                      </div>
    </div>
  )
}

export default EInfoPost
