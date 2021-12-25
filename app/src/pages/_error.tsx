import { NextPage, NextPageContext } from 'next';
import ErrorPageComponent from '../components/pages/ErrorPage/ErrorPage';
import { logger } from './_app';

const ErrorPage: NextPage<Props> = (props) => {
  const { statusCode, error } = props;
  const isServerSideError = !!statusCode; // 500 errors are handled both client-side and server-side by the Error component.

  return <ErrorPageComponent error={error} />;
};

const getInitialProps = ({ res, err }: NextPageContext) => {
  logger.error(err, res);
  return { statusCode: res?.statusCode || err?.statusCode, error: err };
};

ErrorPage.getInitialProps = getInitialProps;

type Props = ReturnType<typeof getInitialProps>;

export default ErrorPage;
