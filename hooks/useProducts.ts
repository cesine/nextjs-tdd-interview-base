import useSWR, { SWRResponse } from 'swr'
import { useBrand } from './useBrand';

type Product = {
  id: string;
  name: string;
  brand: string;
};

export type Data = {
  products: Product[]
};

export const useProducts = (): SWRResponse<Data, Error> => {
  const brand = useBrand();

  return useSWR(`/api/products?${new URLSearchParams({ brand })}`, (url: string) => {
    return fetch(url, {
    }).then((res) => {
      console.log('done fetching')
      return res.json();
    });
  });
}
