import { Layout, Link, Page, Text } from '@vercel/examples-ui'
import type { GetStaticProps } from 'next';
import { useBrand } from '@hooks/useBrand';
import type { ParsedUrlQuery } from 'querystring';

interface Props {
  brand: string;
}

interface PathProps extends ParsedUrlQuery {
  site: string;
  slug: string;
}

export default function About({ brand }: Props) {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        About <b>brand {brand.toUpperCase()}</b>
      </Text>
      <Text className="text-lg mb-4">
        Our balsam fir are popular Christmas trees, with aromatic foliage that does not shed many needles on drying out.
      </Text>
      <Text>
        <Link href="/">Back</Link>
      </Text>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props, PathProps> = async ({
  params,
}) => {
  // if (!params) throw new Error("No path parameters found");

  console.log('params', params)
  // Here you would return data about the brand
  return { props: {
    brand: 'sapin',
    // brand: params.site
  } }
}
