import React from 'react';
import { useColorMode, Box } from '@chakra-ui/react';

const PersonalBox = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: 'black',
    dark: 'white',
  };
  const navHoverBg = {
    light: 'gray.50',
    dark: 'gray.900',
  };

  return (
    <Box
      py="100px"
      _hover={{ backgroundColor: navHoverBg[colorMode] }}
      // bg="gray.50"
      bg="{bgColorBox[colorMode]}"
      color={color[colorMode]}
      h="auto"
      w="auto"
      rounded="lg"
      alignItems="center"
      className="BoxinsideContainer"
    >
      {' '}
      {children}{' '}
    </Box>
  );
};
export default PersonalBox;
