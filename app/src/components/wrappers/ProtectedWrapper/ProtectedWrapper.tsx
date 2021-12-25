import React, { FC } from 'react';
import { logger } from '../../../pages/_app';
import { useMeQuery } from '../../../store/database-api/slices/auth-manager-queries-slice';
import Redirect from '../../utilities/Redirect/Redirect';

const Index: FC = (props) => {
  const { children } = props;
  const { data, isLoading, isError, error } = useMeQuery({});
  console.log(data);
  if (isError) {
    logger.error(error);
    return <Redirect to={'/auth/login'} />;
  }
  if (isLoading) {
    return <>loading...</>;
  }
  return <>{children}</>;
};

export default Index;
