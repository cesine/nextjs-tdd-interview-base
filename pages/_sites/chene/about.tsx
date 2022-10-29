import Link from 'next/link'
import Typography from '@mui/material/Typography';
import { Page } from '@vercel/examples-ui'

export default function About({ site }: { site: string }) {
  return (
    <Page>
      <Typography variant="h2" className="mb-6">
        About <b>site {site.toUpperCase()}</b>
      </Typography>
      <Typography className="text-lg mb-4">
        We provide oak wood for furniture making and flooring, timber-frame buildings, and veneer production.
      </Typography>
      <Typography>
        <Link href="/">Back</Link>
      </Typography>
    </Page>
  )
}

export async function getStaticProps() {
  // Here you would return data about the site
  return {
    props: {
      site: 'chene'
    }
  }
}
