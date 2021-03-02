export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_98B03656B6019C31';

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  'pk_test_OCpqeAwQ6w09CkifEKdqgrwY00sHOnyHKh';
/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image
 */
export const fromImageToUrl = (image) => {
  if (!image) {
    return '/Users/seanmodd/Development/2021/chakrats/public/vercel.svg'; // Or default image here
  }
  if (image.url.indexOf('/') === 0) {
    // It's a relative url, add API URL
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
