import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/posts">Posts</Link>
      </main>
    </MainLayout>
  );
}
