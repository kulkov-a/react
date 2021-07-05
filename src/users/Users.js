import {useEffect, useState} from "react";

export default function Users(props) {


    let [users, setUsers] = useState( []);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromServer => {
                setUsers(usersFromServer);
            });

    },   []);



    return(
        <div>
            {
                users.map(user => <a href={`https://jsonplaceholder.typicode.com/users/${user.id}/posts`}>{user.id} </a> )



            }

        </div>

    );



}
