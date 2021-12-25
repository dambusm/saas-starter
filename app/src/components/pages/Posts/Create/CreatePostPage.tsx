import React, { FC, useRef } from 'react';
import { useCreatePostMutation } from '../../../../store/database-api/slices/posts-manager-queries-slice';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const Index: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [createPost, { isSuccess, isLoading }] = useCreatePostMutation();
  return (
    <MainLayout>
      <h1>Create new post</h1>
      <input type={'text'} ref={inputRef} />
      <button
        onClick={() => createPost({ content: inputRef.current?.value || '' })}
        disabled={isLoading}
      >
        Create
      </button>
      {isSuccess && 'Saved!'}
    </MainLayout>
  );
};

export default Index;
