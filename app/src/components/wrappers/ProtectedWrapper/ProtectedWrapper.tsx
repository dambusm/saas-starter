import React, { FC } from 'react';
import { useMeQuery } from '../../../store/database-api/slices/auth-manager-queries-slice';

const Index: FC = (props) => {
  const { children } = props;
  const { data } = useMeQuery({});
  console.log(data);
  return <>{children}</>;
};

export default Index;
