import React, { Component } from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Accordion,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Wrap,
  WrapItem,
  VStack,
  Input,
  Grid,
  GridItem,
  Badge,
  Box,
} from '@chakra-ui/react';

class List extends Component {
  render() {
    return (
      <>
        <VStack bg="gray.200" h="100vh">
          <VStack mt={20} mb={20}>
            <Badge
              variant="outline"
              colorScheme="blue"
              mb={20}
              fontSize="20px"
              borderRadius="xl"
              p={5}
            >
              #seanmodd
            </Badge>
            {this.props.items.map((item) => (
              <Box
                borderRadius="xl"
                bg="white"
                h="40px"
                w="350px"
                shadow="md"
                my={5}
                key={item.id}
              >
                <Heading
                  color="blue.400"
                  mt={1.5}
                  textAlign="center"
                  fontSize="20px"
                >
                  {item}
                </Heading>
              </Box>
            ))}
          </VStack>

          <Grid h="20%" justify="center" w="100%" align="center">
            <GridItem>
              <Input
                placeholder="put something here"
                shadow="md"
                bg="lightyellow"
                w="110"
                type="text"
              />
            </GridItem>
            <GridItem>
              <Input
                placeholder="put another thing here"
                bg="lightyellow"
                shadow="md"
                my={5}
                w="110"
                type="text"
              />
            </GridItem>
            <GridItem>
              <Button
                bg="green.400"
                shadow="md"
                h="50px"
                my={5}
                w="100px"
                type="submit"
              >
                <Heading color="white" fontSize="20px">
                  SUBMIT!
                </Heading>
              </Button>
            </GridItem>
          </Grid>
        </VStack>
      </>
    );
  }
}

const ListComponent = () => (
  <div>
    <List items={['one', 'two', 'three']} />
  </div>
);

export default ListComponent;
