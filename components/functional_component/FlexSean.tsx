import React from 'react';
import { useColorMode, Flex, Box, Heading, Input } from '@chakra-ui/react';

const FlexSean = ({ items, ...props }) => {
  const { colorMode } = useColorMode();

  const navHoverBg = {
    light: 'gray.100',
    dark: 'gray.700',
  };

  return (
    <>
      <Box align="center">
        <Flex
          className="SEANFLEX"
          height="auto"
          width="50%"
          backgroundColor={{ backgroundColor: navHoverBg[colorMode] }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          opacity={1}
          mb={5}
          minHeight="200px"
        >
          <Heading my={5}>Flex Sean</Heading>
          <Input bg="red.50" />
          <Box my={5}>{props.children}</Box>
        </Flex>
      </Box>
    </>
  );
};

export default FlexSean;
