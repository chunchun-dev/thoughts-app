import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

const Thought = ({content}) => {
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
            Mar 10, 2019
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
            Design
            </Link>
        </Flex>

        <Box mt={2}>
            <chakra.p mt={2} color={"gray.600"}>
            {content}
            </chakra.p>
        </Box>
    </Box>
  );
};

export default Thought;
