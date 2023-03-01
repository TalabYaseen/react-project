import React from 'react'
import Like from './Like'
import { AiFillEdit } from 'react-icons/ai';
function InfoPost(props) {
  console.log(props.data,"props.data.profile_pic")
  const editPost = (id,content) => {
    props.choosePostToEdit(id,content);
  }
  const deletePost = () => {}
  return (

    <div>
      <div className="friend-info">
        <figure>
          <img src={props.data.profile_pic ? require("../components/images/profile_pics/" + props.data.profile_pic) : require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
        </figure>
        <div className="friend-name">
          <ins><a href="time-line.html" title>{props.data.first_name} {props.data.last_name}</a></ins>
          <span>published: {props.data.created_at}</span>

          {/* delete post */}
          
          {(props.data.id == JSON.parse(localStorage.getItem("user")).id) ?
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div> <button onClick={() => { deletePost(props.data.post_id) }} style={{background:'none',border:'none'}}><i class="fa fa-trash" aria-hidden="true" style={{color:'black', fontSize: '30px' }} /></button>
              </div>

              {/* edit post */}
              <div>     <button id={`editPostBTN${props.data.post_id}`} onClick={() => { editPost(props.data.post_id) }}  style={{marginLeft: '10px',background:'none',border:'none' }}> <AiFillEdit style={{ color: "black", fontSize: '30px'}} />
             
              </button>

              </div>
              


            </div>
            : null}
        </div>
        <div className="post-meta">
          {props.data.post_image && <img src={require("../components/images/posts-pics/" + props.data.post_image)} alt="" />}
          <div className="description">
            <p>
              {props.data.content}
            </p>
          </div>
          <Like postid={props.data.post_id} />
        </div>
      </div>
    </div>












  )
}

export default InfoPost
