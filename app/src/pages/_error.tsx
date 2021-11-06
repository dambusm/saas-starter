import { NextPage, NextPageContext } from 'next';
import { logger } from './_app';

const Error: NextPage<Props> = (props) => {
  const { statusCode } = props;
  const isServerSideError = !!statusCode; // 500 errors are handled both client-side and server-side by the Error component.

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

const getInitialProps = ({ res, err }: NextPageContext) => {
  logger.error(err, res);
  return { statusCode: res?.statusCode || err?.statusCode };
};

Error.getInitialProps = getInitialProps;

type Props = ReturnType<typeof getInitialProps>;

export default Error;
