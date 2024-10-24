import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  gap: 20px;
  width: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 20px;
  background-color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  color: black;
  width: 100%;
  cursor: pointer;
`;

export const Logo = styled.img`
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
