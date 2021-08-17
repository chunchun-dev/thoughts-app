import React, { useState, useContext } from "react";
import firebase from "./../firebase";
import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import { AuthContext } from "./Auth";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser === null) {
    return (
        <>
            <Flex
                height='100vh'
                alignItems="center"
                justifyContent="center"
            >
                <Flex direction='column' background='gray.100' p={12} rounded={6}>
                    <Heading mb={6}>Log In/ Sign Up</Heading>
                    <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email@email.com' variant='filled' mb={3} type='email' background='gray.300' color='gray.700'/>
                    <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='*******' variant='filled' mb={6} type='password' background='gray.300' color='gray.700'/>
                    <Button onClick={login} background='blue.200' color='white'>Sign In</Button>
                    <Button onClick={register} background='blue.300' color='white' marginTop={3}>Sign Up</Button>
                </Flex>
            </Flex>
        </>
    );
  } else {
    return <Redirect to='/'/>
  }
};

export default Login;