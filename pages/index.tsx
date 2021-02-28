import Head from 'next/head';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Accordion,
  Box,
} from '@chakra-ui/react';
import Container from '../components/Container';

import ListContainer from '../components/List';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  n
  return (
    <div>
      <Navbar />
      <Container>
        <Head>
          <title>Sean Modd motherfuckers</title>
        </Head>
        <Hero />
        <Box
          bg="gray.200"
          h="100px"
          w="100px"
          rounded="lg"
          className="SEANBOXmadeinINDEX"
        />
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Hi, I'm Sean Modd you bastards.</Heading>
            <ListContainer />
            <Text color={colorSecondary[colorMode]} mt={4}>
              All the Lorem Ipsum shit goes right here...
            </Text>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}
