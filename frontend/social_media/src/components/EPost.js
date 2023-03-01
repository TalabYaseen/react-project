import React, { useState } from 'react'
import EInfoPost from './EInfoPost'
import ShowComment from './ShowComment'
import WriteComment from './WriteComment'
function EPost(props) {
  const [commentadd,setcommentadd]=useState(false);
  const handelsetcommentadd = () => {
    setcommentadd(true)
  }
  const choosePostToEdit = (id,content) => {
    props.choosePostToEdit(id,content)
  };
  console.log();
  return (
    <div>
        <div className="central-meta item">
                                    <div className="user-post">
                                    <EInfoPost data = {props.data} choosePostToEdit={choosePostToEdit} userdata={props.userdata}/>
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

export default EPost;
