import Head from 'next/head';
import { useContext, useState } from 'react';
import { Input, Stack, Heading, Button, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import AuthContext from '../context/AuthContext';
import styles from '../styles/Login.module.css';
import Container from '../components/Container';
import PersonalBox from '../components/PersonalBox';

export default function Signin() {
  const [input, setInput] = useState('');
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(input);
  };

  return (
    <div>
      <Container>
        <Head />

        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          {' '}
          <Heading fontWeight={400}>
            Hi, this is the Modd Squad you bastards.
          </Heading>
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <PersonalBox>
              <form onSubmit={handleSubmit}>
                <Input
                  align="center"
                  className={styles.input}
                  backgroundColor="cyan.50"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="email"
                  placeholder="Email address..."
                />
                <Button
                  variant="solid"
                  colorScheme="twitter"
                  aria-label="Send email"
                  icon={<ArrowRightIcon />}
                  type="submit"
                >
                  Log In
                </Button>
              </form>
            </PersonalBox>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}
