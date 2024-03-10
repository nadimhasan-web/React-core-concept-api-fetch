import { useEffect, useState } from "react"

export default function Friends(){

    const [friends, stateFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => stateFriends(data))
    },[])

    return(
        <div>
            <h3>Friends:{friends.length}</h3>
        </div>
    )
}