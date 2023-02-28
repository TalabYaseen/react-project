import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShowComment(props) {
  console.log(props.data,"data");
  const [allcommentsforthispost,setallcommentsforthispost] = useState([]);
  const getallcommentsforthispost = () => {
    axios.get(`http://localhost/react-project/backend/post/allcommentstopost.php?${props.data.post_id}`)
    .then(response =>{
      setallcommentsforthispost(response.data)
    })
  } 
  useEffect (
    ()=> {
      getallcommentsforthispost();
    },[]
  )
  console.log(allcommentsforthispost,"allcommentsforthispost")
  return (
    <>
    {allcommentsforthispost.map(singlecommint=>
      <div>
       <li>
                                            <div className="comet-avatar">
                                              <img src={singlecommint.profile_pic?require("../components/images/profile_pics/"+singlecommint.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" />
                                            </div>
                                            <div className="we-comment">
                                              <div className="coment-head">
                                                <h5><a href="time-line.html" title>{singlecommint.first_name} {singlecommint.last_name}</a></h5>
                                                <span>{singlecommint.comment_created_at}</span>
                                                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                                              </div>
                                              <p>{singlecommint.comment_content}</p>
                                            </div>
                                          </li>
    </div>
    
    )
    }
  </>
  )
}

export default ShowComment
