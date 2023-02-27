import React from 'react'
import Like from './Like'
function InfoPost() {
  return (
    <div>
        <div className="friend-info">
                                        <figure>
                                          <img src="images/resources/friend-avatar10.jpg" alt="" />
                                        </figure>
                                        <div className="friend-name">
                                          <ins><a href="time-line.html" title>Janice Griffith</a></ins>
                                          <span>published: june,2 2018 19:PM</span>
                                        </div>
                                        <div className="post-meta">
                                          <img src="images/resources/user-post.jpg" alt="" />
                                          <Like/>
                                          <div className="description">
                                            <p>
                                              World's most beautiful car in Curabitur <a href="#" title>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                            </p>
                                          </div>
                                        </div>
                                      </div>
    </div>
  )
}

export default InfoPost
