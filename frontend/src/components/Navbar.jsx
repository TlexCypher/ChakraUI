import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      isClosable: true,
      status: "success",
      title: "Logged out",
      duration: "5000",
      position: "top",
      description: "Success to log out."
    })
  }
  return (
    <Flex bg="gray.200" p="10px">
      <Heading color="purple.400">Funalab Judge</Heading>
      <Spacer />
      <HStack spacing={"20px"}>
        <Text>Problem List</Text>
        <Text>Submit List</Text>
        <Button colorScheme="purple" onClick={showToast}>LogOut</Button>
      </HStack>
    </Flex>
  )
}
