// import { useColorMode, IconButton } from '@chakra-ui/core';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  return (
    <IconButton
      aria-label="Toggle Dark Switch"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  );
};

export default DarkModeSwitch;
