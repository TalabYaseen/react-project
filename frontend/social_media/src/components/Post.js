import React, { useState } from 'react'
import InfoPost from './InfoPost'
import ShowComment from './ShowComment'
import WriteComment from './WriteComment'
function Post(props) {
  const [commentadd,setcommentadd]=useState(false);
  const handelsetcommentadd = () => {
    setcommentadd(true)
  }
  const choosePostToEdit = (id,content) => {
    props.choosePostToEdit(id,content)
    // console.log(id);
  };
  return (
    <div>
        <div className="central-meta item">
                                    <div className="user-post">
                                    <InfoPost data = {props.data} choosePostToEdit={choosePostToEdit}/>
                                      <div className="coment-area">
                                        <ul className="we-comet">
                                      {/*  COMMENT*/ }
  
                                         <ShowComment data = {props.data}/>
  
                                      {/*END COMMENT*/ }
  
                                       {/* INPUT COMMENT*/ }
                                          <WriteComment data = {props.data}/>
                                      {/* END INPUT COMMENT*/ }
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
    </div>
  )
}

export default Post
