import React, { useState, useEffect, useContext, createContext } from "react";

const PostContext = createContext({
  title: "",
  content: "",
});

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return <header>Header Component</header>;
};

const PostTitle = () => {
  const post = useContext(PostContext);
  return <h1>{post.title}</h1>;
};

const PostMain = () => {
  const post = useContext(PostContext);
  return <main>{post.content}</main>;
};

const Post = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://my-json-server.typicode.com/oliachuzhdiuk/db/posts/1"
      );
      const postData = await response.json();
      console.log(postData);
      setPost(postData);
    }
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;
