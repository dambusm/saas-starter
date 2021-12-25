import { useEffect, useState } from 'react';
import {
  useMeQuery,
  useRefreshTokenMutation,
} from '../../store/database-api/slices/auth-manager-queries-slice';

function useMe() {
  // Wraps useMeQuery and handles refreshing token before fetching me, if necessary

  const { isLoading, error, ...rest } = useMeQuery({});
  const [refreshToken, { isLoading: isLoadingRefreshedToken }] =
    useRefreshTokenMutation();
  const [shouldRefreshToken, setShouldRefreshToken] = useState(true);
  useEffect(() => {
    if (shouldRefreshToken && error) {
      // TODO: Check more specifically for expired token error
      refreshToken({});
      setShouldRefreshToken(false);
    }
  }, [error, refreshToken, shouldRefreshToken]);
  return {
    ...rest,
    error,
    isLoading: isLoading || isLoadingRefreshedToken,
  };
}

export default useMe;
