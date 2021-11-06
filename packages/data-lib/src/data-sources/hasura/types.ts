type HasuraError = {
  response: {
    errors: {
      extensions: {
        path: string;
        code: string;
      };
      message: string;
    }[];
    status: number;
  };
  request: {
    query: string;
    variables: {
      [key: string]: string;
    };
  };
};

export const isHasuraError = (toCheck: unknown): toCheck is HasuraError => {
  return !!(
    toCheck &&
    typeof toCheck === 'object' &&
    toCheck.hasOwnProperty('response') &&
    toCheck.hasOwnProperty('request') &&
    typeof (toCheck as { response: unknown }).response === 'object'
  );
};

export const isUniquenessConstraintError = (toCheck: unknown) =>
  isHasuraError(toCheck) &&
  toCheck.response.errors.some(
    (error) => error.extensions.code === 'constraint-violation'
  );
