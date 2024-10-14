import React from "react";
import { auth } from "../../shared/firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const logOut = () => {
    // 로그아웃
    auth.signOut();
    navigate("/login");
  };
  return (
    <h1>
      <button onClick={logOut}>LogOut</button>
    </h1>
  );
}
