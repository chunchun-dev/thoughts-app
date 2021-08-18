import React from "react";
import {
  chakra,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import DeleteThought from "../utils/DeleteThought";
import { useContext } from "react";
import { AuthContext } from "../utils/Auth";

const Thought = (thought) => {

  const { currentUser } = useContext(AuthContext);
  console.log(thought.timestamp)
  const currentDate = Date(thought.timestamp.seconds*100+thought.timestamp.nanoseconds/100).substring(0, 10)
  console.log(currentDate)

  return (
    <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={"white"}
        maxW="2xl"
        marginBottom='30px'
        width='100%'
    >
        <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
                fontSize="sm"
                color={"gray.600"}
            >
            {currentDate}
            </chakra.span>
            <Link
                px={3}
                py={1}
                bg="black"
                color="gray.100"
                fontSize="sm"
                fontWeight="700"
                rounded="md"
                _hover={{ bg: "gray.500" }}
            >
            {thought.tag}
            </Link>
            {currentUser.uid == thought.uid && <Link
                px={3}
                py={1}
                bg="black"
                color="gray.100"
                fontSize="sm"
                fontWeight="700"
                rounded="md"
                background='red.500'
                _hover={{ bg: "red.700" }}
                onClick={()=>{DeleteThought(thought)}}
            >
            Delete
            </Link>}
        </Flex>

        <Box mt={2}>
            <chakra.p mt={2} color={"gray.600"}>
            {thought.content}
            </chakra.p>
        </Box>
    </Box>
  );
};

export default Thought;
