import Head from 'next/head';
import Link from 'next/link';
import { useMeQuery } from '../store/database-api/slices/auth-manager-queries-slice';

export default function Home() {
  const { data: me, isLoading, isSuccess, isError, error } = useMeQuery({});

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          {JSON.stringify(me)}
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
