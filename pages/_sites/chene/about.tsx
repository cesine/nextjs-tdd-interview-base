import { Layout, Link, Page, Text } from '@vercel/examples-ui'

export default function About({ brand }: { brand: string }) {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        About <b>brand {brand.toUpperCase()}</b>
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
  // Here you would return data about the brand
  return {
    props: {
      brand: 'chene'
    }
  }
}
