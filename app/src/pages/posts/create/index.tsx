import React, { FC } from 'react';
import ProtectedWrapper from '../../../components/wrappers/ProtectedWrapper/ProtectedWrapper';
import { useGetPostsQuery } from '../../../store/database-api/slices/posts-manager-queries-slice';

const Index: FC = (props) => {
  const {} = useGetPostsQuery({});
  return <ProtectedWrapper>fdsfds</ProtectedWrapper>;
};

export default Index;
