import React from "react";
import { auth } from "../../shared/firebase/firebase";

const logOut = () => {
  // 로그아웃
  auth.signOut();
};

export default function Home() {
  return (
    <h1>
      <button onClick={logOut}>LogOut</button>
    </h1>
  );
}
