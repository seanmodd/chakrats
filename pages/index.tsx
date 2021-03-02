import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import Container from '../components/Container';
import PersonalForm from '../components/PersonalForm';
import PersonalList from '../components/PersonalList';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import PersonalBox from '../components/PersonalBox';
import styles from '../styles/Home.module.css';

import { fromImageToUrl, API_URL } from '../utils/urls';
import { twoDecimals } from '../utils/format';

const index = ({ products }) => (
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
          <PersonalForm />
          <PersonalBox>
            <ul>
              {products.map((product) => (
                <div className={styles.product}>
                  <Link href={`/products/${product.slug}`}>
                    <a>
                      <div className={styles.product__Rows}>
                        <div className={styles.product__ColImg}>
                          <img src={fromImageToUrl(product.image)} />
                        </div>
                        <div className={styles.product__Col}>
                          {product.name} ${twoDecimals(product.price)}
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </ul>
          </PersonalBox>
        </Flex>
      </Stack>
      <Hero />
    </Container>
  </div>
);
export default index;

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  return {
    props: {
      products,
    },
  };
}
