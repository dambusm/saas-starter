import React, { FC } from 'react';
import { useMeQuery } from '../../../store/database-api/slices/auth-manager-queries-slice';

const Index: FC = (props) => {
  const { children } = props;
  const { data: me } = useMeQuery({});

  return (
    <>
      <header>
        <h1>Hello, World</h1>
        {me && <div>{me.email}</div>}
      </header>
      {children}
    </>
  );
};

export default Index;
