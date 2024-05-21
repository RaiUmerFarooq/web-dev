import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});



const App = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('?_limit=10').then((response) => {
         setPosts(response.data);
      });
   }, []);

   return (
      // ...
   );
};

export default App;




code:
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import AddPost from './components/AddPost';
import Post from './components/Post';

/*
  AXIOS docs
  https://axios-http.com/docs/intro
 */

function App() {
  const [posts, setPosts] = useState([]);
  
  /* 
    CHALLENGE - Rewite the code for the fetchPosts function. 
      1. create an instance of the axios client
      2. refactor the fetchPosts function to use axios
      
      baseURL: 'https://jsonplaceholder.typicode.com/posts'
      extention string: '?_limit=4'
  */
  
  const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
  })
  
  const fetchPosts = async() => {
    const response = await client.get('?_limit=4');
    setPosts(response.data);
  }
 
 useEffect(() => {
      fetchPosts()
   }, []);
   
  const addPost = async(title, body) => {
    const response = await client.post('', {
      title,
      body,
    });
    setPosts((prevPosts) => [response.data, ...prevPosts])
  };
   
  const deletePost = async(id) => {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //   method: 'DELETE'
    // })
    //   if(response.status === 200) {
    //     setPosts(
    //       posts.filter((post) => {
    //         return post.id !== id;
    //       })
    //     )
    //   }
    const response = await client.delete(`${id}`);
    setPosts(posts.filter((post) => post.id !== id))
  };
   
  return (
    <main>
    <h1>Consuming REST api with Axios</h1>
      <AddPost addPost={addPost}/>
      <section className="posts-container">
      <h2>Posts</h2>
        {posts.map((post) => 
          <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} 
            deletePost={deletePost}
          />
        )}
      </section>
   </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 
