import React, {useState, useContext} from 'react'
import AddThought from '../utils/AddThought'
import {Input, Button, Flex, Text} from '@chakra-ui/react'
import {v4 as uuidv4} from 'uuid'
import { AuthContext } from '../utils/Auth'
import { Redirect } from 'react-router-dom'
import firebase from '../firebase'

function PostThoughtForm() {

    const { currentUser } = useContext(AuthContext);

    const [content, setContent] = useState('')
    const [tag, setTag] = useState('')

    const submit = () => {
        AddThought({ content, tag, id: uuidv4(), timestamp: firebase.firestore.FieldValue.serverTimestamp() })
        setContent('')
        setTag('')
    }

    if (currentUser == null) {
        return <Redirect to='/'/>
    } else {
        return (
            <Flex h='100vh' w='100vw' flexDirection='column' justifyContent='center' alignItems='center' background='gray.100'>
                <Flex direction='column' width='30%' height='60%' justifyContent='center' alignItems='center' background='white' boxShadow='lg' flexDirection='column' rounded={10}>
                    <Text fontSize='3xl' marginBottom={10}>New Post</Text>
                    <Input type='text' value={content} onChange={(e)=>{setContent(e.target.value)}} width='70%' background='gray.200' height='50' marginBottom={10} placeholder='content'/>
                    <Input type='text' value={tag} onChange={(e)=>{setTag(e.target.value)}} width='70%' background='gray.200' height='50' marginBottom={10} placeholder='tag'/>
                    <Button onClick={()=>submit()} background='blue.100' size='lg'>Submit</Button>
                </Flex>
            </Flex>
        )
    }
}

export default PostThoughtForm
