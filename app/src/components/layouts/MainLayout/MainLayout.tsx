import React, { FC } from 'react';
import useMe from '../../../lib/hooks/useMe';

const Index: FC = (props) => {
  const { children } = props;
  const { data: me, isLoading } = useMe();

  return (
    <>
      <header
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        <h1>Hello, World</h1>
        {isLoading ? 'loading...' : me ? <div>{me.email}</div> : null}
      </header>
      <main>{children}</main>
    </>
  );
};

export default Index;
