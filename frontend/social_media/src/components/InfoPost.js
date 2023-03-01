import React from 'react'
import Like from './Like'
function InfoPost(props) {

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
                                          <img src={props.data.profile_pic?require("../components/images/profile_pics/"+props.data.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
                                        </figure>
                                        <div className="friend-name">
                                          <ins><a href="time-line.html" title>{props.data.first_name} {props.data.last_name}</a></ins>
                                          <span>published: {props.data.created_at}</span>
                                        </div>
                                        {/* delete and edit post if this is your post*/}
                                        {(props.data.id == JSON.parse(localStorage.getItem("user")).id) ?
                                        <div>
                                          {/* <button onClick={() => {deletePost(props.data.post_id)}}>Delete Your Post</button> */}
                                          <button id={`editPostBTN${props.data.post_id}`} onClick={() => {editPost(props.data.post_id,props.data.content)}}>edite</button>
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

export default InfoPost
