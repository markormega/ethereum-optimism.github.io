import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mark - Subdomain Takeover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mark - Subdomain Takeover" />
        <p className="description">
          markanthonyormega@gmail.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
