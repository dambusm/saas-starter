import { signin, signout, useSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

export default function Home() {
  const [session, loading] = useSession();

  // Client side data fetching
  const { data, error } = useSWR('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
      response.json()
    )
  );
  console.log(data);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signin()}>Sign in</button>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.email} <br />
              <button onClick={() => signout()}>Sign out</button>
            </>
          )}
        </p>

        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </main>
    </div>
  );
}
