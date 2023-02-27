import React from 'react';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import ResponsiveNav from '../components/responsivenav';
import WritePost from '../components/writePost';
import Post from '../components/Post';

const Home = () => {
 
          return (
              <div className="theme-layout">
                <Navbar/>
                <section>
                  <div className="gap gray-bg">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row" id="page-contents">
                          <Sidebar/>
                            <div className="col-lg-6">
                              {/*write post start*/}
                              <WritePost/>
                              {/* add post new box */}
                              <div className="loadMore">
                              {/*POST*/}
                                <Post/>
                                
                              </div>
                            </div>{/* centerl meta */}
                            <Rightbar/>
                          </div>	
                        </div>
                      </div>
                    </div>
                  </div>	
                </section>
                
                <div className="bottombar">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        {/* <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span> */}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
          );
        
}

export default Home;
