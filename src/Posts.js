import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Posts = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      const result = res.data
      setPosts(result)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])
  return ( 
    <div>
    <h2>Posts - {posts.length}</h2>
    <ul>
    {posts.map((post) => {
      return <li key={post.id}>{post.title}</li>
    })}
    </ul>
    </div>
   );
}
 
export default Posts;