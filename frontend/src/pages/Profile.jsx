import { HStack, List, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs colorScheme="purple" mt="20px" variant={'enclosed'}>
      <TabList>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Account Info</Tab>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Project History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel bg="gray.200" color="purple.400" minH={"100vh"} fontStyle={"italic"} fontSize={"2xl"}>
          <List>
            <ListItem>
              <HStack>
                <Text>Email: </Text>
                <Text>sample@example.com</Text>
              </HStack>
            </ListItem>

            <ListItem mt="10px">
              <HStack>
                <Text>Name: </Text>
                <Text>Taichi Araki</Text>
              </HStack>
            </ListItem>

            <ListItem mt="10px">
              <HStack>
                <Text>Favorite Programing language: </Text>
                <Text>Golang</Text>
              </HStack>
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel bg="gray.200" color="purple.400" minH={"100vh"} fontStyle={"italic"} fontSize={"2xl"}>
          <List>
            <ListItem>
              <HStack>
                <Text>Typescript(React)</Text>
                <Text>TlexCypher Judge Frontend</Text>
              </HStack>
            </ListItem>

            <ListItem mt="10px">
              <HStack>
                <Text>Golang(Gin)</Text>
                <Text>TlexCypher Judge Backend</Text>
              </HStack>
            </ListItem>

            <ListItem mt="10px">
              <HStack>
                <Text>Golang(Gin)</Text>
                <Text>ChakraUI Backend</Text>
              </HStack>
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
