import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Like(props) {
  const userid =  (JSON.parse(localStorage.getItem("user"))).id;
  const [isliked,setisliked] = useState(false)
  // تعريف ستات لتخزين عدد اللايكات على البوست
  const [likes,setLikes] = useState(0)
  // معرفة عدد اللايكات على البوست من الداتا بيس
  const getLikes = (id) => {
    axios.get(`http://localhost/react-project/backend/post/likes.php?${id}?${userid}`)
    .then(response =>{
      setLikes (response.data.count);
      console.log (response)
      if (response.data.isliked == 'true'){
        setisliked(true);
        console.log("yes")
      }else {
        setisliked(false);
        console.log("no")
      }
    })
  }


  // تعريف ستات لتخزين عدد الكومنتات على البوست
  const [comments,setcomments] = useState(0)
  // معرفة عدد الكومنتات على البوست من الداتا بيس
  const getcomments = (id) => {
    axios.get(`http://localhost/react-project/backend/post/comments.php?${id}`)
    .then(response =>{
      setcomments(response.data);
    })
  }

  useEffect (
    ()=>{getcomments(props.postid);
      getLikes(props.postid);
    }
    ,[]
  )

// this function add or remove like start
const handellike = () => {
  console.log(userid,isliked,props.postid)
  if (isliked) {
    axios.get(`http://localhost/react-project/backend/post/deletelike.php?${userid}?${props.postid}`)
    .then(response =>{
      getLikes(props.postid);
    })
  }else {
    axios.get(`http://localhost/react-project/backend/post/addlike.php?${userid}?${props.postid}`)
    .then(response =>{
      getLikes(props.postid);
     ;
    })
    
  }
}
// this function add or remove like end
  return (
    <div>
      <div className="we-video-info">
                                            <ul>
                                              <li>
                                                <span className="comment" data-toggle="tooltip" title="Comments">
                                                  <i className="fa fa-comments-o" />
                                                  <ins>{comments}</ins>
                                                </span>
                                              </li>
                                              <li onClick={handellike}>
                                                <span className={isliked?"like":"notlike"} data-toggle="tooltip" title="like">

                                                  <i className="ti-heart" />
                                                  <ins>{likes}</ins>
                                                </span>
                                              </li>
                                              {/* <li>
                                                <span className="dislike" data-toggle="tooltip" title="dislike">
                                                  <i className="ti-heart-broken" />
                                                  <ins>200</ins>
                                                </span>
                                              </li> */}
                                              {/* <li className="social-media">
                                                <div className="menu">
                                                  <div className="btn trigger"><i className="fa fa-share-alt" /></div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-html5" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-facebook" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-google-plus" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-twitter" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-css3" /></a></div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-instagram" /></a>
                                                    </div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-dribbble" /></a>
                                                    </div>
                                                  </div>
                                                  <div className="rotater">
                                                    <div className="btn btn-icon"><a href="#" title><i className="fa fa-pinterest" /></a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
    </div>
  )
}

export default Like;
