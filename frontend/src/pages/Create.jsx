import { FormControl, FormLabel, Box, Input, FormHelperText, Textarea, Checkbox, HStack, Button } from "@chakra-ui/react";

export default function Create() {
  return (
    <Box maxW="480px" ml="20px" mt="40px">
      <FormControl isRequired mb="30px">
        <FormLabel>Task name: </FormLabel>
        <Input type="text" name="title" />
        <FormHelperText>Enter a description task name.</FormHelperText>
      </FormControl>

      <FormControl mb="20px" isRequired>
        <FormLabel>Task description: </FormLabel>
        <Textarea
          placeholder="Enter a detailed description for the task..."
          name="description"
        />
      </FormControl>

      <FormControl mb="20px">
        <HStack>
          <Checkbox
            colorScheme="purple"
          />
          <FormLabel>Make this a priority task.</FormLabel>
        </HStack>
      </FormControl>

      <Button colorScheme="purple" type="submit">Submit</Button>
    </Box>
  )
}



