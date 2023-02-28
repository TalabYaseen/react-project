import "./post.css";
import { MdOutlineMoreVert } from 'react-icons/md';
import { Users } from "../../dummyData/dummyData";
import { useState,useEffect } from "react";
import axios from 'axios';
import { FaEdit } from "react-icons/fa";


export default function Post({ post }) {
  
  // بعرف ستات لتخزين الكونتات فيها
  const [comments , setComments] = useState([]);
  // بعرف ستات لتخزين البوستات فيها
  const [posts , setPosts] = useState([]);

  // func to get all post
  function getPosts(){
    axios.get(`http://localhost:80/platform/react_project/posts.php/`)
    .then(response => {
        setPosts(response.data);
    })
}

// func to get all comments
function getComments(){
  axios.get(`http://localhost:80/platform/react_project/comments.php/`)
  .then(response => {
      setComments(response.data);
  })
}


  // تعريف ستات لتخزين الداتا لتعديل أي بوست
  const [inputs , setInputs] = useState("");
  const [file, setFile] = useState(null);
  const current_ID = (JSON.parse(localStorage.getItem('user'))).id;


  // this func delete post
  const deletePost = (id) => {
    console.log("deletepost");
    axios.delete(`http://localhost/react-project/backend/post/posts.php?${id}`).then(function(response){
    console.log (response.data)
    })
  }

  // git all posts and all comments
  useEffect(()=>{
    getPosts();
    getComments();
} , [])

  // this func make form apper to edite post
  // يجب تغييره ب modal
  const editPost = (id) => {
    console.log("editepost");
    document.getElementById(`post${id}`).style.display = 'none';
    document.getElementById(`editPostForm${id}`).style.display = 'block';
    document.getElementById(`editPostBTN${id}`).style.display = 'none';
  }

  // likes number on post
  const [like,setLike] = useState(post.like)
  // هل الشخص عمل لايك ولا لأ
  // القيمة المبدأية أنو مش عامل لايك
  const [isLiked,setIsLiked] = useState(false)
  // يعكس ال isliked
  // يضيف أو يطرح عدد 1 من اللايكات
  // لا يخزن في الداتا بيس 
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }


  // this if check if the post has img and save its img name in a variable 
  if (post) {
    console.log(post.post_image,'POST');
    var img= post.post_image;
  }else {
    img= ""
  }


// func to save changes on certin post
  const handleEditPostSubmit  = async (e) => {
    e.preventDefault();
    const formEditData = new FormData();
    formEditData.append("post_content", inputs['post_content']);
    formEditData.append("post_id", inputs['post_id']);
    formEditData.append("file", file);
    console.log(formEditData);
    try {
      const response = await axios.post(
        "http://localhost/react-project/backend/post/postEdit.php", formEditData
      );
      console.log(response.data);
      window.location.assign('/home');
    } catch (error) {
      console.error(error);
    }
  };
  // لحفظ الداتا التي يدخلها المستخدم في الفورم الخاص بتعديل البوست
  const handleEditPost = (id) => {
    const post_id = id;
    const value = document.getElementById(`editPostInput${id}`).value;
    setInputs({'post_content': value , 'post_id' : post_id})
  }
  // اخفاء فورم تعديل البوست
      const canclePostEdit = (id) => {
      document.getElementById(`post${id}`).style.display = 'block';
      document.getElementById(`editPostForm${id}`).style.display = 'none';
      document.getElementById(`editPostBTN${id}`).style.display = 'inline-block';
      document.getElementById(`imgPost${id}`).style.display = 'block';
    }
  return (
    <div className="post">
      <div className="postWrapper" id={`post${post.post_id}`}>
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src=""
              alt=""
            />
            <span className="postUsername">
            {post.first_name}
            </span>
            <span className="postDate">{post.created_at}</span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>
        <div className="postCenter">
          {console.log(post.post_image)}
          <span className="postText">{post?.content}</span>
          {/* <span className="postText">{post? img:""}</span> */}
          <img className="postImg" src={require("../images/"+img)} alt="noimage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
      <form id={`editPostForm${post.post_id}`} action="" style={{display : 'none'}} onSubmit={handleEditPostSubmit}>

                    <textarea 
                      style={{width: '50vw'}} 
                      type="text" 
                      defaultValue={post.content} 
                      id={`editPostInput${post.post_id}`} 
                      onChange={() => handleEditPost(post.post_id)}/>

                    <input 
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}/>

                    <br />

                    <button type='submit'>Update</button>
                    <button style={{background : 'red' , color : 'white'}} onClick={()=>{canclePostEdit(post.post_id)}}  type='button'>Cancle</button>

      </form>
      {(post.user_id == current_ID) ?
                    <div>
                      <button onClick={() => {deletePost(post.post_id)}}>Delete Your Post</button>
                      <button id={`editPostBTN${post.post_id}`} onClick={() => {editPost(post.post_id)}}><FaEdit /></button>
                    </div>
                    : null }
    </div>
  );
}