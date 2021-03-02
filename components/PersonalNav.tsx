import { useColorMode, Button, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useContext } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import AuthContext from '../context/AuthContext';
import styles from '../styles/Header.module.css';

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
  const { user } = useContext(AuthContext);
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
        <div className={styles.auth}>
          {user ? (
            <Link href="/account">
              <a>
                <img src="/user_avatar1.png" alt={user.email} />
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Log In</a>
            </Link>
          )}
        </div>

        <DarkModeSwitch />
      </StickyNav>
    </>
  );
};

export default PersonalNav;
