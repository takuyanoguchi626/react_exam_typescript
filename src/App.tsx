// import axios from "axios";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import type { User } from "./types/user";

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   personalColor: string;
// };

export const App = () => {
  const [user, setUser] = useState<Array<User>>([]);
  useEffect(() => {
    // axios.get<Array<User>>("https://example.com/users").then((res) => {
    //   setUser(res.data);
    // });
    setUser([
      {
        id: 1,
        name: "田中",
        age: 24,
        personalColor: "red",
      },
      {
        id: 2,
        name: "吉田",
        age: 26,
        personalColor: "green",
      },
      {
        id: 3,
        name: "鈴木",
        age: 45,
        personalColor: "blue",
        hobbys: ["soccer", "baseball"],
      },
    ]);
  }, []);
  return (
    <div>
      {user.map((user) => (
        <ListItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          hobbys={user.hobbys}
        />
      ))}
    </div>
  );
};
