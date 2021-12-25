import React, { FC } from 'react';
import useMe from '../../../lib/hooks/useMe';

const Index: FC = (props) => {
  const { children } = props;
  const { data: me, isLoading } = useMe();

  return (
    <>
      <header>
        <h1>Hello, World</h1>
        {isLoading ? 'loading...' : me ? <div>{me.email}</div> : null}
      </header>
      {children}
    </>
  );
};

export default Index;
