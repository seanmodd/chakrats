import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Accordion,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import products from '../../products.json';
import { fromImageToUrl } from '../../utils/urls';

const product = products[0];

const Product = () => (
  <div>
    <Head>
      {product.meta_title && <title>{product.meta_title}</title>}
      {product.meta_description && (
        <meta name="description" content={product.meta_description} />
      )}
    </Head>
    <Text>{product.name}</Text>
    <img src={fromImageToUrl(product.image)} />
    <Text>{product.name}</Text>
    <Text>${product.price}</Text>
    <p>{product.content}</p>
  </div>
);

export default Product;
