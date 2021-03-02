/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import { Text } from '@chakra-ui/react';
import Head from 'next/head'
import Link from 'next/link'
import products from '../products.json';
import styles from '../styles/Home.module.css'
import { fromImageToUrl } from '../utils/urls'
import { twoDecimals } from '../utils/format'

const Catalog = ({ products }) => (
  <ul>
      {products.map(product => (
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
    ))}
  </ul>
);

const PersonalProducts = () => <Catalog products={products} />;

export default PersonalProducts;
