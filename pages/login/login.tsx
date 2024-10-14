import React, { useState } from "react";
import { auth } from "../../shared/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Error,
  Switcher,
  StyledLink,
} from "../../shared/ui/auth-components";
import GithubButton from "../../shared/ui/github-button";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (loading || email === "" || password === "") return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(true);
      navigate("/");
    } catch (event) {
      // 이메일이 이미 존재하거나 비밀번호가 형식(보안성 강화)이 맞지 않는 경우
      if (event instanceof FirebaseError) {
        setError(event.message);
      }
    } finally {
      setLoading(false);
    }
    // create an account
    // set the name of the user
    // redirect to the home page
    console.log(name, email, password);
  };
  return (
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="text"
          required
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value={loading ? "Loading..." : "Login"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?
        <StyledLink to="/create-account">Create one &rarr;</StyledLink>
      </Switcher>
      <GithubButton />
    </Wrapper>
  );
}
