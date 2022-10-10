import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSite } from '@lib/site';

export const useSite = () => {
  const [site, setSite] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const { pathname, search, host } = window.location;
    console.log('router.asPath', router);

    // This doesnt work for files that are not overwridden
    // const siteFromPath = router.route
    //       .replace(/\/_sites\/([^/]*).*/, '$1')
    // setSite(siteFromPath);

    const siteFromLocation = getSite(host);
    setSite(siteFromLocation)
  }, [site, router]);

  return site;
}
