import Head from 'next/head';
import Image from 'next/image';
import Form from './components/form';
import Footer from './components/footer';
import Logo from './components/logo';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const signupStatus = router.query;

  return (
    <div className="relative w-screen min-h-screen font-body od-gradient">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="The first bridge from Web2 to Web3 on DNS" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" key="twhandle" />
        <meta name="twitter:title" content="The first bridge from Web2 to Web3 on DNS" />

        {/* Open Graph */}
        <meta property="og:image" content={`${router.basePath}/od-og.png`} key="ogimage" />
        <meta property="og:title" content="The first bridge from Web2 to Web3 on DNS" />
        <meta property="og:site_name" content="Orange Domains" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="The first bridge from Web2 to Web3 on DNS" />
        <meta property="og:type" content="website" />

        <title>Orange Domains - The first bridge from Web2 to Web3 on DNS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#09005F" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="relative z-10 flex flex-col items-center sm:max-w-5xl sm:mx-auto">
        <main>
          <div className="relative">
            <div className="flex flex-col px-6 py-8 sm:pt-8 sm:pb-4 sm:px-16">
              <div className="mx-auto">
                <Image
                  src="/logo.svg"
                  alt=""
                  layout="fixed"
                  width={80}
                  height={80}
                  quality={100}
                />
              </div>

              <p className="font-captions text-center uppercase text-[0.8125rem] leading-normal mt-12 text-od-navy tracking-widest">Launching in 2022</p>
              <h1 className="mt-4 text-3xl font-medium text-center md:leading-tight text-od-black font-headlines md:mt-8 md:text-5xl">Orange Domains:<br /> Bridging Web2 and Web3</h1>

              <p className="mt-8 text-lg font-semibold text-center text-od-black/80 sm:text-xl">Powering .BTC domains by seamlessly connecting the .locker TLD to Web3.</p>

              <p className="mt-2 text-lg font-semibold text-center text-od-black/80 sm:text-xl">In partnership with DISH Network and Tucows, one of the world&apos;s largest web registrars.</p>

              <p className="mt-6 text-lg font-medium text-center text-od-black/70">Need a .BTC domain? Go to <a className="underline transition ease-out decoration-4 decoration-od-orange hover:decoration-od-navy duration-600 underline-offset-2" href="https://btc.us/" target="_blank" rel="noopener noreferrer">BTC.US</a> for more info.</p>

              <Form status={signupStatus} />
            </div>
          </div>
        </main>
      </div>

      <Footer />

      <div className="fixed top-0 right-0 w-screen h-screen opacity-30">
        <Image src="/gradient.png" alt="" layout="fill" objectFit="cover" quality={100} />
      </div>
    </div>
  )
}
