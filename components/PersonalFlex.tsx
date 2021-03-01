import React from 'react';
import { useColorMode, Flex } from '@chakra-ui/react';

const PersonalFlex = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <Flex
        as="main"
        className="SeanFlexer"
        justifyContent="center"
        flexDirection="row"
        bg="{bgColor[colorMode]}"
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      ;
    </>
  );
};

export default PersonalFlex;
