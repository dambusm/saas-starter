import React, { FC } from 'react';
import { useGetPostsQuery } from '../../../store/posts/posts-queries';
import styles from '../posts.module.scss';

const Index: FC = (props) => {
  const {} = useGetPostsQuery({});
  return <div>fdsfds</div>;
};

export default Index;
