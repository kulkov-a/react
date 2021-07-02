import Posts from "./components/posts/Posts";
import Menu from "./components/menu/Menu";

function App() {
  return (

    <div>

      <Menu items={['posts page', 'comments page', 'users page']}/>
        <Posts />
      <Menu items={['about', 'team',]}/>

    </div>

  );
}

export default App;
