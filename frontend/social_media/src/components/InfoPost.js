import React from 'react'
import Like from './Like'
function InfoPost(props) {
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
