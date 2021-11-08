import { FC } from 'react';
import { dataManager } from '../_app';
import styles from './posts.module.scss';

const Index: FC<Props> = (props) => {
  const { posts } = props;
  return <div className={styles.container}>{JSON.stringify(posts)}</div>;
};

export async function getStaticProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await dataManager.postsManager.getPosts();
  return {
    props: { posts },
    // "revalidate" enables incremental static generation https://vercel.com/docs/next.js/incremental-static-regeneration
    revalidate: 60,
  };
}
type Props = PromiseResult<ReturnType<typeof getStaticProps>>['props'];

export default Index;
