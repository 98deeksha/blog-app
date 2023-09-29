import React, { useEffect, useState } from "react";
import axios from "axios";

const PostDisplay = (props) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        axios
          .get(
            `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
          )
          .then((userResponse) => {
            setUser(userResponse.data);
          })
          .catch((err) => {
            console.error("Error fetching user data:", err);
          });
      })
      .catch((err) => {
        console.error("Error fetching post data:", err);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
      });
  }, [id]);

  return (
    <div>
      <h2>User: {user.name}</h2>
      <h2>Post Title: {post.title}</h2>
      <p>Post Body: {post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDisplay;
