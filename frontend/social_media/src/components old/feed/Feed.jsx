import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData/dummyData";
import { useState , useEffect , useParams } from 'react';
import axios from 'axios'



export default function Feed() {
  const [posts , setPosts] = useState([]);
  // const [comments , setComments] = useState([]);
  useEffect(()=>{
    getPosts();
    // getComments();
} , [])
function getPosts(){
  axios.get(`http://localhost/react-project/backend/post/posts.php`)
  .then(response => {
      setPosts(response.data);
  })
}
// function getComments(){
//   axios.get(`http://localhost:80/platform/react_project/comments.php/`)
//   .then(response => {
//       setComments(response.data);
//   })
// }
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}