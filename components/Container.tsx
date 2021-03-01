import React from 'react';
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';

import DarkModeSwitch from './DarkModeSwitch';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: '#171717',
  };

  const color = {
    light: 'black',
    dark: 'white',
  };

  const navHoverBg = {
    light: 'gray.100',
    dark: 'gray.700',
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
    background-color: ${bgColor[colorMode]};
    width: 100%;
    min-width: 356px;
    max-width: 800px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 8;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <div className="SEANDIV">
      <StickyNav
        className="SEANNAV"
        as="nav"
        px={[2, 6, 6]}
        // py={2}

        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box className="SEANBOX">
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </Link>
          <Link href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </Link>
          <Link href="/sean" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Sean
            </Button>
          </Link>
        </Box>

        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as="main"
        className="SEANFLEXMAIN"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      <Flex
        className="SEANFLEX"
        height="auto"
        width="auto"
        backgroundColor={{ backgroundColor: navHoverBg[colorMode] }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        opacity={1}
        minHeight="200px"
      >
        {/* <FormControl className="SEANFORM" maxWidth="500px">
          <FormLabel>Label</FormLabel>
          <Input />
          <Textarea mt={2} backgroundColor="cyan.500" />
          <FormHelperText>Helper message</FormHelperText>
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <IconButton aria-label="icon" icon="copy" /> */}
      </Flex>
      ;
    </div>
  );
};

export default Container;
