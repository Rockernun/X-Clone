import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../shared/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Error,
  Switcher,
  StyledLink,
} from "../../shared/ui/auth-components";
import GithubButton, { ButtonWrapper } from "../../shared/ui/github-button";
import GoogleButton from "../../shared/ui/gmail-button";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (loading || name === "" || email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      const update = await updateProfile(credentials.user, {
        displayName: name,
      });
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
      <Title>Join 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          required
        />
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
        <Input
          type="submit"
          value={loading ? "Loading..." : "Create Account"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Already have an account?
        <StyledLink to="/login">Login &rarr;</StyledLink>
      </Switcher>
      <ButtonWrapper>
        <GoogleButton />
        <GithubButton />
      </ButtonWrapper>
    </Wrapper>
  );
}
