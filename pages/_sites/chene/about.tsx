import { Layout, Link, Page, Text } from '@vercel/examples-ui'

export default function About({ site }: { site: string }) {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        About <b>site {site.toUpperCase()}</b>
      </Text>
      <Text className="text-lg mb-4">
        We provide oak wood for furniture making and flooring, timber-frame buildings, and veneer production.
      </Text>
      <Text>
        <Link href="/">Back</Link>
      </Text>
    </Page>
  )
}

About.Layout = Layout

export async function getStaticProps() {
  // Here you would return data about the site
  return {
    props: {
      site: 'chene'
    }
  }
}
