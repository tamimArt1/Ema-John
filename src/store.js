import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const productsAtom = atomWithStorage('ema-john-products', []);

export const totalItemAtom = atom((get) => {
  const currentProducts = get(productsAtom);
  let total = 0;
  for (let item of currentProducts) {
    total += item.quantity;
  }
  return total;
});

export const getProductsAtom = atom((get) => get(productsAtom));
