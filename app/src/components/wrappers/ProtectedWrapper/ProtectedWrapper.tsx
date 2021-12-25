import React, { FC, useEffect, useState } from 'react';
import { logger } from '../../../pages/_app';
import {
  useMeQuery,
  useRefreshTokenMutation,
} from '../../../store/database-api/slices/auth-manager-queries-slice';
import Redirect from '../../utilities/Redirect/Redirect';

const Index: FC = (props) => {
  const { children } = props;
  const { data: me, isLoading, error: meError } = useMeQuery({});
  const [refreshToken, { isLoading: isLoadingRefreshedToken }] =
    useRefreshTokenMutation();
  const [shouldRefreshToken, setShouldRefreshToken] = useState(true);
  const isAuthenticated = !!me?.email;

  useEffect(() => {
    if (shouldRefreshToken && meError) {
      // TODO: Check more specifically for expired token error
      refreshToken({});
      setShouldRefreshToken(false);
    }
  }, [meError, refreshToken, shouldRefreshToken]);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  if (isLoading || isLoadingRefreshedToken) {
    return <>loading...</>;
  }

  logger.error(meError);
  return <Redirect to={'/auth/login'} />;
};

export default Index;
