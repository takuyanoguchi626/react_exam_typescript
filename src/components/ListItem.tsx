import type { FC } from "react";
import type { User } from "../types/user";

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   personalColor: string;
// };

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor, hobbys } = props;

  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})-
      {hobbys?.join("/")}
    </p>
  );
};

ListItem.defaultProps = {
  personalColor: "red",
};
