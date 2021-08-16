import React, {useState} from 'react';
import { useEffect } from 'react';
import firebase from '../firebase'
import {Flex} from '@chakra-ui/react'
import Thought from './Thought';

function ThoughtFeed() {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('thoughts')

  function getThoughts() {
    setLoading(true)
    ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data())
        setThoughts(items)
        setLoading(false)
    })
  }

  useEffect(() => {
    getThoughts()
  }, [])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <Flex
      bg={"#F9FAFB"}
      direction='column'
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {thoughts.map((thought) => (
        <Thought content={thought.content}/>
      ))}
    </Flex>
  );
}

export default ThoughtFeed;