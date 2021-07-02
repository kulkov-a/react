import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts(props) {

    let [posts, setPosts] = useState( []);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromServer => {
                setPosts(postsFromServer);
            });

    },   []);

    return(
        <div>
            {
                posts.map(post => <Post item={post}/>)
            }

        </div>
    );
}


