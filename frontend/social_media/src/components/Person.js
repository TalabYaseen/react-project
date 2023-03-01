import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Person() {

    const navigate = useNavigate();
  const id = (JSON.parse(localStorage.getItem('user'))).id;

//   const handleroute = (id) => {

   
//     console.log(id,"id number for frinds");
//     localStorage.setItem('profile',JSON.stringify(id));
//     // navigate ("/elseprofile");


//   }

  const [users,setUsers] = useState([]);
  const [pendingFriends,setpendingFriends] = useState([]);
  const [acceptrdFriends,setAcceptedFriends] = useState([]);
  const [requestFriends,setRequestFriends] = useState([]);  
  const [pendingRequest,setpendingRequest] = useState([]);
  const [friends,setfriends] = useState([]);
  const [requestFriend,setrequestFriend] = useState([]);
  
  useEffect(()=>{
      getUsers();
      getFriendsPending();
      getFriendsAccepted();
      getFriendsRequest();

  },[]);

      // لعرض جميع المستخدمين في الموقع
      const getUsers = () => {

          axios.get("http://localhost/react-project/backend/friend/user.php")
          .then((respone)=>{
              setUsers(respone.data)
              console.log(respone.data);
          })
      }
      
  // اللي بعثهم المستخدم pending عرض جميع طلبات الصداقة في حالة 
  const getFriendsPending = () => {

      axios.get(`http://localhost/react-project/backend/friend/acceptFriend.php/${id}`)
      .then((respone)=>{
          console.log(respone.data , 'pending');
          let pendingRequest = respone.data.map((ele)=>{
              return ele.friend_id
          })
          setpendingRequest(pendingRequest);
          console.log(pendingRequest);
          setpendingFriends(respone.data)
      })
  }
  //   عرض جميع طلبات الصداقة الذين تمت الموافقة عليهم

  
  const getFriendsAccepted = () => {

      axios.get(`http://localhost/react-project/backend/friend/friends.php/${id}`)
      .then((respone)=>{
          console.log(respone.data);
          let friends = respone.data.map((ele)=>{
              return ele.friend_id
          })
          console.log('friends',friends);
          setfriends(friends);
          setAcceptedFriends(respone.data)
      })
  }

      // عرض طلبات الصداقة الخاصة بالمستخدم واللي لسا ما وافق عليهم

      const getFriendsRequest = () => {

          axios.get(`http://localhost/react-project/backend/friend/friendRequests.php/${id}`)
          .then((respone)=>{
              console.log(respone.data , 'accept');
              let requestFriend = respone.data.map((ele)=>{
                  return ele.user_id
              })
              console.log(requestFriend);
              setrequestFriend(requestFriend);
              setRequestFriends(respone.data)
          })
      }

      
  //  pending وحالته بتكون friends  اضافة صديق جديد في جدول ال 
  const AddFriends = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.post(`http://localhost/react-project/backend/friend/friends.php/save`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getUsers();
          getFriendsPending();
          getFriendsRequest();
      })


      
  }

  
  // status الموافقة على طلب الصداقة وتغيير ال 
  const AcceptFriend = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.put(`http://localhost/react-project/backend/friend/friends.php/edit`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getFriendsPending();
          getFriendsAccepted();
          getFriendsRequest();
      })


      
  }

     
  // الغاء ارسال طلب الصداقة
  const removeRequest = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      console.log(inputs , 'inputs');
      axios.put(`http://localhost/react-project/backend/friend/removeRequest.php/edit`,inputs)
      .then((respone)=>{
          console.log(respone.data);
        //   getFriendsPending();
        //   getFriendsAccepted();
      })


      
  }
  
  // حذف الصداقة
  const removeFriend = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.put(`http://localhost/react-project/backend/friend/removeFriends.php`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getFriendsPending();
          getFriendsAccepted();
          
      })

  }
  return (
    <div>
      <div className="central-meta">
        <div className="groups">
          <span><i className="fa fa-users" /> People</span>
        </div>
        <ul className="nearby-contct">


              {users.filter(function(ele) {
                    // لحتى ما اطبع المستخد اللي عامل تسجيل دخول
                    if (ele.id === id) {
                        return false; 
                        // skip
                    }
                    return true;
                    }).map((ele,index)=>{
                        return(

                    
          <li>
            <div className="nearly-pepls">
                
              <figure>
              <Link to={`/Elseprofile/${ele.id}`}><img src={ele.profile_pic?require("../components/images/profile_pics/"+ele.profile_pic):require("../components/images/profile_pics/coverphotoplaceholder.png")} alt="" /></Link>
              </figure>
              <div className="pepl-info">
                <h4 >{ele.first_name} {ele.last_name}</h4>
                {(() => {
                            if (pendingRequest.includes(ele.id) || friends.includes(ele.id) || requestFriend.includes(ele.id)){
                                if(pendingRequest.includes(ele.id)){
                                    return (

                                           <Link>
                                                    <button type="submit" className="blogBtn2" onClick={()=>removeFriend(ele.id)}>
                                                    {" "}
                                                    remove request
                                                    </button>
                                            </Link>

                                    )

                                }
                                if(friends.includes(ele.id)){
                                    return (
                                        <Link>
                                        <button type="submit" className="blogBtn2" onClick={()=>removeRequest(ele.id)}>
                                        {" "}
                                        remove friend
                                        </button>
                                        </Link>
                                                    // <Button className="blogBtn2" onClick={()=>removeFriend(ele.id)}>remove friends</Button>
                                        )

                                }
                                if(requestFriend.includes(ele.id)){
                                    return (
                                        <Link>
                                        <button type="submit" className="blogBtn4" onClick={()=>AcceptFriend(ele.id)}>
                                        {" "}
                                        Accept 
                                        </button>
                                </Link>
                                    )

                                }
                             
                            }else{
                                return ( 
                                    <Link>
                                        <button type="submit" className="blogBtn3" onClick={()=>AddFriends(ele.id)} >
                                        {" "}
                                        Add
                                        </button>
                                    </Link>
                               
                                )
                            }
              
                      })()}


              </div>
            </div>
          </li>
        
)})}
                {/* <a href="#" title className="add-butn" data-ripple>add friend</a> */}


        </ul>
    </div>{/* photos */}
    </div>
  )
}

export default Person
