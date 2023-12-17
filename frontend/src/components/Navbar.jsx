import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bg="pink" p="10px">
      <Heading color="purple.500">Funalab Judge</Heading>
      <Spacer />
      <HStack spacing={"20px"}>
        <Text>Problem List</Text>
        <Text>Submit List</Text>
        <Button colorScheme="purple">LogOut</Button>
      </HStack>
    </Flex>
  )
}
