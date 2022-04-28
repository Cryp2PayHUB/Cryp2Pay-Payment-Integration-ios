import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               httpEquiv="Content-Security-Policy"
               content="upgrade-insecure-requests"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="flex items-center justify-center h-screen">
            <Link href="/login">
               <button className="btn text-lg">Pay with Cryp2pay</button>
            </Link>
         </div>
      </div>
   );
}
