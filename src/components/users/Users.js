import {useEffect, useState} from "react";
import User from "../user/User";

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
                users.map(value => <User item={value}/>)



            }

        </div>

    );



}
