import React, { FC } from 'react';
import { useMeQuery } from '../../../store/auth/auth-manager-queries';

const Index: FC = (props) => {
  const { children } = props;
  const { data } = useMeQuery({});
  console.log(data);
  return <>{children}</>;
};

export default Index;
