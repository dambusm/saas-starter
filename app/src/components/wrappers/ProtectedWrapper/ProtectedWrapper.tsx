import React, { FC } from 'react';
import useMe from '../../../lib/hooks/useMe';
import { logger } from '../../../pages/_app';
import Redirect from '../../utilities/Redirect/Redirect';

const Index: FC = (props) => {
  const { children } = props;
  const { data: me, isLoading, error } = useMe();
  const isAuthenticated = !!me?.email;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  if (isLoading) {
    return <>loading...</>;
  }

  logger.error(error);
  return <Redirect to={'/auth/login'} />;
};

export default Index;
