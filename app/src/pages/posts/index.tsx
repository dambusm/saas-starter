import { FC } from 'react';
import useSWR from 'swr';
import { publicDataManager } from '../_app';
import styles from './posts.module.scss';

const fetcher = () => publicDataManager.postsManager.getPosts();

const Index: FC<Props> = (props) => {
  const { posts } = props;
  // Together with SWR, you can pre-render the page for SEO, and also have features such as caching, revalidation,
  // focus tracking, refetching on interval in the client side.
  //  You can pass the pre-fetched data as the initial value to the initialData option.
  //  The page is still pre-rendered. That means it's SEO friendly, can be cached and accessed very fast.
  //  But after hydration, it’s also fully powered by SWR in the client side.
  //  Which means the data can be dynamic and update itself over time and user interactions.
  const { data, error } = useSWR('posts', fetcher, { initialData: posts });
  if (error || !data) {
    return <div>Oops, something went wrong</div>;
  }
  return <div className={styles.container}>{JSON.stringify(data)}</div>;
};

export async function getStaticProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await fetcher();
  return {
    props: { posts },
    // "revalidate" enables incremental static generation https://vercel.com/docs/next.js/incremental-static-regeneration
    revalidate: 60,
  };
}
type Props = PromiseResult<ReturnType<typeof getStaticProps>>['props'];

export default Index;
