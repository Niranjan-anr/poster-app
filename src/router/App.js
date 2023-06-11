import { Outlet } from 'react-router-dom';
import PostList from './PostList';
function App() {
  return (
    <div>
    <Outlet/>
      <PostList/>
    </div>
  );
}
export default App;
export async function Postloader() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  console.log(data.posts, 'executed fetching at DataLoader');
  return data.posts;
}
