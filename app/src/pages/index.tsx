import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          {/*{!session && (*/}
          {/*  <>*/}
          {/*    Not signed in <br />*/}
          {/*    <button onClick={() => signin()}>Sign in</button>*/}
          {/*  </>*/}
          {/*)}*/}
          {/*{session && (*/}
          {/*  <>*/}
          {/*    Signed in as {session.user.email} <br />*/}
          {/*    <button onClick={() => signout()}>Sign out</button>*/}
          {/*  </>*/}
          {/*)}*/}
        </p>

        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </main>
    </div>
  );
}
