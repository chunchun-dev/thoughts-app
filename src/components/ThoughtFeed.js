import React, {useState} from 'react';
import { useEffect } from 'react';
import firebase from '../firebase'

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
    <div>
      {thoughts.map((thought) => (
        <div key={thought.id}>
          <h2>{thought.content}</h2>
        </div>
      ))}
    </div>
  );
}

export default ThoughtFeed;