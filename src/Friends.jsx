import { useEffect, useState } from "react";
import "./Box.css";
export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h3>Friends : {friends.length}</h3>
    </div>
  );
}
