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
import PersonalForm from '../components/PersonalForm';
import PersonalList from '../components/PersonalList';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import PersonalProducts from '../components/PersonalProducts';
import PersonalBox from '../components/PersonalBox';

const index = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <div>
      <Container>
        <Head>
          <title>Sean Modd motherfuckers</title>
        </Head>

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
            <PersonalList />

            <PersonalForm />
            <PersonalBox>
              <Text color={colorSecondary[colorMode]} mt={4}>
                All the Lorem Ipsum shit goes right here...
                <PersonalProducts />
              </Text>
            </PersonalBox>
          </Flex>
        </Stack>
        <Hero />
      </Container>
    </div>
  );
};
export default index;
