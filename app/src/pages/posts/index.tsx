import { FC } from 'react';
import { fetchAndTransformResponse } from '../../store/lib/baseQueries';
import { dataManager } from '../_app';
import styles from './posts.module.scss';

const Index: FC<Props> = (props) => {
  const { posts } = props;
  return <div className={styles.container}>{JSON.stringify(posts)}</div>;
};

export async function getServerSideProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const postsResponse = await fetchAndTransformResponse(() =>
    dataManager.postsManager.getPosts({ limit: 10 })
  );
  if (postsResponse.error) {
    throw new Error(postsResponse.error.data);
  }
  return {
    props: { posts: postsResponse.data },
    // "revalidate" enables incremental static generation https://vercel.com/docs/next.js/incremental-static-regeneration
    revalidate: 60,
  };
}
type Props = PromiseResult<ReturnType<typeof getServerSideProps>>['props'];

export default Index;
