import Link from 'next/link'
import { Page, Text } from '@vercel/examples-ui'
import type { GetStaticProps } from 'next';
import { useSite } from '@hooks/useSite';
import type { ParsedUrlQuery } from 'querystring';

interface Props {
  site: string;
}

interface PathProps extends ParsedUrlQuery {
  site: string;
}

export default function About({ site }: Props) {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        About <b>site {site.toUpperCase()}</b>
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
  // Here you would return data about the site
  return { props: {
    site: 'sapin',
    // site: params.site
  } }
}
