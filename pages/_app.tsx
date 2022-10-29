import type { AppProps } from 'next/app'
import Head from 'next/head.js'
import packageInfo  from '../package.json'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {
  const { description = packageInfo.description, title = packageInfo.name } = pageProps;

  return (
    <div>
      <Head>
        {title && <title>{`${title} - Vercel Examples`}</title>}
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
