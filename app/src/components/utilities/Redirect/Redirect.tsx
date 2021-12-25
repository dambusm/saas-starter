import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useAsync } from 'react-use';
import { UrlObject } from 'url';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const Index: FC<Props> = (props) => {
  const { to, replace } = props;
  const router = useRouter();
  const [error, setError] = useState<unknown>();
  useAsync(async () => {
    try {
      if (replace) {
        await router.replace(to);
      } else {
        await router.push(to);
      }
    } catch (error) {
      setError(error);
    }
  }, [to, router]);
  if (error) {
    return <ErrorPage error={error} />;
  }
  return null;
};

type Props = {
  to: UrlObject | string;
  replace?: boolean;
};

export default Index;
