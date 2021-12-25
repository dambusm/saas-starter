import React, { FC, useEffect } from 'react';
import { logger } from '../../../pages/_app';

const Index: FC<Props> = (props) => {
  const { error } = props;
  useEffect(() => {
    logger.error('Error page rendered', error);
  }, [error]);
  return (
    <div
      style={{
        marginTop: '30vh',
        textAlign: 'center',
      }}
    >
      <h1>Something went wrong</h1>
      <p>
        We're sorry, an unexpected error occurred. Please refresh or try again
        later.
      </p>
    </div>
  );
};

type Props = {
  error: unknown;
};

export default Index;
