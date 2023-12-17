import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, HStack, Heading, SimpleGrid, Text, } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5555/alltasks")
      .then(({ data }) => {
        setTasks(data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <SimpleGrid p="10px" spacing={10} minChildWidth={"120px"}>
      {tasks && tasks.map(task => (
        <Card key={task.Id} borderTop="8px" borderColor={"purple.400"} bg="white">
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.Img}>
                <AvatarBadge width={"1.3em"} bg="teal.500">
                  <Text fontSize={"xs"} color="white">3</Text>
                </AvatarBadge>
              </Avatar>
              <Box>
                <Heading as="h3" size="sm">{task.Title}</Heading>
                <Text>by {task.Author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>{task.Description}</Text>
          </CardBody>

          <Divider borderColor={"gray.200"} />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid >
  )
}


