import React from 'react';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import ResponsiveNav from '../components/responsivenav';
import WritePost from '../components/writePost';
import Post from '../components/Post';
import { useState ,useEffect} from "react";
import axios from 'axios';

const Home = () => {
   // make a state to store the requested posts data
   const [posts , setPosts] = useState([]);
   // get all posts function start
   function getPosts(){
     axios.get(`http://localhost/react-project/backend/post/homeposts.php?${JSON.parse(localStorage.getItem("user")).id}`)
     .then(response => {
         setPosts(response.data);
         console.log(response.data)
     })
 }
 // get all posts function end
 // using hook to store all posts and comments data and rerender the page
 useEffect(()=>{
   getPosts();
   // getComments();
 } , [])
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
                              {posts.map(e => <Post data={e}/>)}
                                
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
