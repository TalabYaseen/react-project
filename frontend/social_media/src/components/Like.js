import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Like(props) {
  console.log(props.postid)

  // تعريف ستات لتخزين عدد اللايكات على البوست
  const [likes,setLikes] = useState(0)
  // معرفة عدد اللايكات على البوست من الداتا بيس
  const getLikes = (id) => {
    axios.get(`http://localhost/react-project/backend/post/likes.php?${id}`)
    .then(response =>{
      setLikes(response.data);
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
    ()=>{getcomments(props.postid)
      getLikes(props.postid)
    }
    ,[]
  )
  return (
    <div>
      <div className="we-video-info">
                                            <ul>
                                              {/* <li>
                                                <span className="views" data-toggle="tooltip" title="views">
                                                  <i className="fa fa-eye" />
                                                  <ins>1.2k</ins>
                                                </span>
                                              </li> */}
                                              <li>
                                                <span className="comment" data-toggle="tooltip" title="Comments">
                                                  <i className="fa fa-comments-o" />
                                                  <ins>{comments}</ins>
                                                </span>
                                              </li>
                                              <li>
                                                <span className="like" data-toggle="tooltip" title="like">
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

export default Like
