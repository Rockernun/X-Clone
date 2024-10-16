import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  background-color: white;
  font-weight: 500;
  padding: 10px 20px;
  margin-top: 50px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: black;
  width: 100%;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="shared/ui/assets/github.svg" />
      Continue with Github
    </Button>
  );
}
