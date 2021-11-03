import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

// ### products state ----------------------------------------------------------
export const productsAtom = atomWithStorage('ema-john-products', []);

// derived state of products
export const totalItemAtom = atom((get) => {
  const currentProducts = get(productsAtom);
  let total = 0;
  for (let item of currentProducts) {
    total += item.quantity;
  }
  return total;
});

export const getProductsAtom = atom((get) => get(productsAtom));

// ### search text state -------------------------------------------------------
export const searchAtom = atom('');

// derived state of text
export const getSearchTextAtom = atom((get) => get(searchAtom).toLowerCase());

// ### userInfo ----------------------------------------------------------------
export const userInfoAtom = atom({});

// ### allProducts ----------------------------------------------------------------
export const apiProductsAtom = atom([]);

// ### filteredProducts ----------------------------------------------------------------
export const apiFilteredProductsAtom = atom([]);
