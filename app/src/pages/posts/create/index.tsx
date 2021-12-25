import React, { FC } from 'react';
import CreatePostPage from '../../../components/pages/Posts/Create/CreatePostPage';
import ProtectedWrapper from '../../../components/wrappers/ProtectedWrapper/ProtectedWrapper';

const Index: FC = () => {
  return (
    <ProtectedWrapper>
      <CreatePostPage />
    </ProtectedWrapper>
  );
};

export default Index;
