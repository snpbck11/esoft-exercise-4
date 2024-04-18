import { FC, useEffect, useState } from "react";
import styles from "./UserList.module.css";

type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const getUserList = (): Promise<TUser[]> => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
  );
};

const UserList: FC = () => {
  const [userList, setUserList] = useState<TUser[]>([]);

  useEffect(() => {
    getUserList().then((res) => setUserList(res));
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Список пользователей</h2>
      <ul className={styles.list}>
        {userList &&
          userList.map((user) => (
            <li key={user.id}>
              <p>Имя {user.username}</p>
              <p>Фамилия {user.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
