import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"


const UserDisplay = (props) => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const {id} = props.match.params

  useEffect(() => {
 Promise.all([axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),  
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)])
  .then((values) =>{
    const [userResponse, postResponse] = values
    setUsers(userResponse.data)
    setPosts(postResponse.data)
  })
  //  .then((res) => {
  //    const result = res.data;
  //    setUsers(result);
  //  })
   .catch((err) => {
     console.log(err);
   })

        // .then((res) => {
        //   const result = res.data;
        //   setPosts(result);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
  }, [id])

 
  return ( 
    <div>
    <h2>Author - {users.name} - {posts.length}</h2>
    <ul>
    {posts.map((post) => {
      return (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    })}
    </ul>

    </div>
   );
}
 
export default UserDisplay;