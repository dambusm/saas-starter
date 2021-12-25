import { useMeQuery } from '../../store/database-api/slices/auth-manager-queries-slice';

function useMe() {
  return useMeQuery;
}

export default useMe;
