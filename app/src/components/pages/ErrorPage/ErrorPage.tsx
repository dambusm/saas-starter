import React, { FC, useEffect } from 'react';
import { logger } from '../../../pages/_app';

const Index: FC<Props> = (props) => {
  const { error } = props;
  useEffect(() => {
    logger.error('Error page rendered', error);
  }, [error]);
  return <h1>Error</h1>;
};

type Props = {
  error: unknown;
};

export default Index;
