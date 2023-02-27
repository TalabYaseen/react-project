import React from 'react'

function WriteComment() {
  return (
    <div>
      <li className="post-comment">
                                            <div className="comet-avatar">
                                              <img src="images/resources/comet-1.jpg" alt="" />
                                            </div>
                                            <div className="post-comt-box">
                                              <form method="post">
                                                <textarea placeholder="Post your comment" defaultValue={""} />
                                                <div className="add-smiles">
                                                  <span className="em em-expressionless" title="add icon" />
                                                </div>
                                                <div className="smiles-bunch">
                                                  <i className="em em---1" />
                                                  <i className="em em-smiley" />
                                                  <i className="em em-anguished" />
                                                  <i className="em em-laughing" />
                                                  <i className="em em-angry" />
                                                  <i className="em em-astonished" />
                                                  <i className="em em-blush" />
                                                  <i className="em em-disappointed" />
                                                  <i className="em em-worried" />
                                                  <i className="em em-kissing_heart" />
                                                  <i className="em em-rage" />
                                                  <i className="em em-stuck_out_tongue" />
                                                </div>
                                                <button type="submit" />
                                              </form>	
                                            </div>
                                          </li>
    </div>
  )
}

export default WriteComment
