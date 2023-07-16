import "./App.css";
import { useState } from "react";

const getData = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then((res) => {
    return res.json();
  });
};

function App() {
  const [posts, setPosts] = useState([]);

  const fetchAndUpdateData = async () => {
    try {
      const data = await getData();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={fetchAndUpdateData}>Get Post</button>
      <ul>
        {posts.map((postItem) => (
          <li key={postItem.id}>{postItem.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
