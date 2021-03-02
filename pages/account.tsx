/* eslint-disable react/display-name */
import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Stack,
  Button,
} from '@chakra-ui/react';
import Container from '../components/Container';
import styles from '../styles/Home.module.css';
import AuthContext from '../context/AuthContext';
import { API_URL } from '../utils/urls';

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = await getToken();
          const orderRes = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await orderRes.json();
          setOrders(data);
        } catch (err) {
          setOrders([]);
        }
      }
      setLoading(false);
    };

    fetchOrders();
  }, [user]);

  return { orders, loading };
};

export default () => {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);

  if (!user) {
    return (
      <div>
        <p>Please Login or Register before accessing this page</p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Head>
          <title>Your Account</title>
          <meta name="description" content="Your orders will be shown here" />
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
          {' '}
          <Heading fontWeight="normal">Logged in as {user.email}</Heading>
          <Flex
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <div>
              <Text>Please Login or Register before accessing this page</Text>
              <Link href="/">
                <a>
                  <Button my={5}>Go Back</Button>
                </a>
              </Link>
            </div>
            <a href="#" onClick={logoutUser}>
              <Button my={5}>Logout</Button>
            </a>
            <Box>
              <h2>Account Page</h2>
              <hr />
              <h3>Your Orders</h3>
              {loading && <p>Orders are Loading</p>}

              {/* {orders.map((order) => (
        <div key={order.id}>
          {new Date(order.created_at).toLocaleDateString('en-EN')}{' '}
          {order.product.name} ${order.total} {order.status}
        </div>
      ))} */}
            </Box>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
};
