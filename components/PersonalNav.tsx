import { useColorMode, Button, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import DarkModeSwitch from './DarkModeSwitch';

const PersonalNav = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: '#171717',
  };

  const navHoverBg = {
    light: 'gray.100',
    dark: 'gray.700',
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;

    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
    background-color: ${bgColor[colorMode]};
    width: 100%;
    min-width: 356px;
    max-width: 800px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    margin-left: auto;
    margin-right: auto;
  `;
  return (
    <>
      <StickyNav className="SEANNAV" as="nav" px={[10, 10, 10]} pt={10} mx={10}>
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
    </>
  );
};

export default PersonalNav;
