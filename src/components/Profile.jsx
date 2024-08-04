import React, { useState, useContext } from "react";
import UserContext from "../context/UserContexts";

const Profile = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const { user } = useContext(UserContext);
  if (!user) return <div>Please login</div>;
  return (
    <div>
      <h1>Profile page</h1>
      <h4>{user.userName}</h4>
    </div>
  );
};

export default Profile;
