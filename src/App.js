import Posts from "./components/posts/Posts";
import Menu from "./components/menu/Menu";

function App() {
  return (

    <div>

      <Menu item={['posts page', 'comments page', 'users page']}/>
        <Posts />
      <Menu item={['about', 'team',]}/>

    </div>

  );
}

export default App;
