import React from 'react'
import InfoPost from './InfoPost'
import ShowComment from './ShowComment'
import WriteComment from './WriteComment'
function Post() {
  return (
    <div>
        <div className="central-meta item">
                                    <div className="user-post">
                                    <InfoPost/>
                                      <div className="coment-area">
                                        <ul className="we-comet">
                                      {/*  COMMENT*/ }
  
                                         <ShowComment/>
  
                                      {/*END COMMENT*/ }
  
                                       {/* INPUT COMMENT*/ }
                                          <WriteComment/>
                                      {/* END INPUT COMMENT*/ }
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
    </div>
  )
}

export default Post
