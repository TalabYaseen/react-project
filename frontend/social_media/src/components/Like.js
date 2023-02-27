import React from 'react'

function Like() {
  return (
    <div>
      <div className="we-video-info">
                                            <ul>
                                              <li>
                                                <span className="comment" data-toggle="tooltip" title="Comments">
                                                  <i className="fa fa-comments-o" />
                                                  <ins>52</ins>
                                                </span>
                                              </li>
                                              <li>
                                                <span className="like" data-toggle="tooltip" title="like">
                                                  <i className="ti-heart"   />
                                                  <ins>2.2k</ins>
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
    </div>
  )
}

export default Like;
