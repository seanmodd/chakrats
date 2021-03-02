import { useColorMode, Heading, Text, Box, Container } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

import { fromImageToUrl, API_URL } from '../../utils/urls';
import PersonalNav from '../../components/PersonalNav';
import PersonalBox from '../../components/PersonalBox';

const Product = ({ product }) => (
  <div>
    <Container>
      <PersonalNav />
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <PersonalBox>
        <Box align="center" mb="15px">
          <Heading>{product.name}</Heading>
        </Box>
        <img src={fromImageToUrl(product.image)} />
        <Box align="center" mt="15px">
          <Text fontSize="24px" fontWeight="normal">
            {product.name}
          </Text>
          <Text fontSize="24px" color="blue.400" fontWeight="bold">
            ${product.price}
          </Text>
          <p>{product.content}</p>
        </Box>
      </PersonalBox>
    </Container>
  </div>
);
export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();
 
  return {
    props: {
      product: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Get external data from the file system, API, DB, etc.
  const products_res = await fetch(`${API_URL}/products`);
  const products = await products_res.json();
  return {
    paths: products.map((el) => ({
      params: { slug: String(el.slug) },
    })),
    fallback: false,
  };
}
export default Product;
