import React, { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState({
    id: "",
    cover: "",
    title: "",
    content: "",
  });
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://my-json-server.typicode.com//oliachuzhdiuk/db/posts/1"
      );
      const postData = await response.json();
      setPost(postData);
    }
    fetchData();
  }, []);

  function likeThis() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  useEffect(() => {
    const likeButton = document.getElementById("like");
    if (likeButton) {
      likeButton.addEventListener("click", likeThis);
      return () => {
        likeButton.removeEventListener("click", likeThis);
      };
    }
  }, []);

  return (
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
        <button id="like">
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
}

export default Post;
