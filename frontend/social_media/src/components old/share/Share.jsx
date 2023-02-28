import "./share.css";
import { useState } from "react";
import axios from 'axios'
import { MdPermMedia,MdLabelImportantOutline,MdOutlineMeetingRoom,MdEmojiEmotions } from 'react-icons/md';
export default function Share() {
<<<<<<< HEAD:frontend/social_media/src/components/share/Share.jsx

      
=======
  const [inputs , setInputs] = useState("");
  const current_ID = (JSON.parse(localStorage.getItem('user'))).id;
  const [file, setFile] = useState(null);
  const handleImagePost = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("post", inputs);
  formData.append("user_id", current_ID);
  formData.append("file", file);

  try {
    const response = await axios.post(
      "http://localhost/react-project/backend/post/posts.php", formData
    );
    console.log(response.data);
    // window.location.assign('/home');

  } catch (error) {
    console.error(error);
  }
};

const handlePost = (e) => {
    const value = e.target.value;
    setInputs(value);
}
>>>>>>> a235727a306475ba115fa2cd29b9e86aa0b61dc1:frontend/social_media/src/components old/share/Share.jsx
  return (
    <form className="form-outline w-100" onSubmit={handleImagePost}>
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
           onChange={handlePost}
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    {/* <MdPermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span> */}
                    <input type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <div className="shareOption">
                    <MdLabelImportantOutline htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdOutlineMeetingRoom htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <MdEmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button type="submit" className="shareButton">Share</button>
        </div>
      </div>
    </div>
    </form>
  );
}