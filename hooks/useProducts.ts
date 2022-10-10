import useSWR, { SWRResponse } from 'swr'
import { useSite } from './useSite';

type Product = {
  id: string;
  name: string;
  site: string;
};

export type Data = {
  products: Product[]
};

export const useProducts = (): SWRResponse<Data, Error> => {
  const site = useSite();

  return useSWR(site ? `/api/products?${new URLSearchParams({ site })}`: null, (url: string) => {
    return fetch(url, {
    }).then((res) => {
      console.log('done fetching')
      return res.json();
    });
  });
}
