import React from 'react'
import Like from './Like'
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
function InfoPost(props) {
  // console.log(props.data,"props.data.profile_pic")
  // this func make edite post appear
  const editPost = (id,content) => {
    // console.log("editepost");
    // document.getElementById(`post${props.data.post_id}`).style.display = 'none';
    // document.getElementById(`editPostForm${props.data.post_id}`).style.display = 'block';
    // document.getElementById(`editPostBTN${props.data.post_id}`).style.display = 'none';
    props.choosePostToEdit(id,content);
    console.log(id,content)
  }
  const deletePost = () => {
    console.log("deletepost");
    axios.delete(`http://localhost/react-project/backend/post/posts.php?${props.data.post_id}`).then(function(response){
    console.log (response.data);
    })
  }
  return (

    <div>
      <div className="friend-info">
        <figure>
          <img src={JSON.parse(localStorage.getItem("user")).profile_pic ? require("../components/images/profile_pics/" + JSON.parse(localStorage.getItem("user")).profile_pic ) : require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
        </figure>
        <div className="friend-name">
          <ins><a title>{JSON.parse(localStorage.getItem("user")).first_name} {JSON.parse(localStorage.getItem("user")).last_name}</a></ins>
          <span>published: {props.data.created_at}</span>
          {/* delete and edit post */}
          {(JSON.parse(localStorage.getItem("user")).id == JSON.parse(localStorage.getItem("user")).id) ?
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div> <button onClick={() => { deletePost(props.data.post_id) }}><i class="fa fa-trash" aria-hidden="true" style={{ color: "black", fontSize: '20px', marginLeft: '10px' }} /></button></div>
              <div>     <button id={`editPostBTN`} onClick={() => { editPost(props.data.post_id,props.data.content) }}> <AiFillEdit style={{ color: "black", fontSize: '20px' }} />
             
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
