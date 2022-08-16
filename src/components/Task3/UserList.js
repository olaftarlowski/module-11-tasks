import { useEffect, useState } from "react";
import User from "./User";
import { getData } from "./services";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      console.log(res);
      setUserData(res);
    });
  }, []);

  const check = () => {
    console.log(userData);
  };

  return (
    <div style={{ width: "80%" }}>
      <button onClick={check}>check</button>
      {userData.map((user) => {
        return <User  userData={user} key={user.login.uuid} />;
      })}
      {userData.length === 0 ? <p>User list is empty</p> : null}
    </div>
  );
};

export default UserList;
