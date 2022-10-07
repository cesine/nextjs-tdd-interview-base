import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBrand } from '@lib/brand';

export const useBrand = () => {
  const [brand, setBrand] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const { pathname, search, host } = window.location;
    console.log('router.asPath', router);

    // This doesnt work for files that are not overwridden
    // const brandFromPath = router.route
    //       .replace(/\/_sites\/([^/]*).*/, '$1')
    // setBrand(brandFromPath);

    const brandFromLocation = getBrand(host);
    setBrand(brandFromLocation)
  }, [brand, router]);

  return brand;
}
