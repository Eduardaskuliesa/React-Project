import React from 'react';

type UseQueryReturn<T> = {
  data: T,
  loading: boolean,
  errorMessage: string | null,
};

const useQuery = <T, InitValue extends T>(
  request: () => Promise<T>,
  initialValue: InitValue,
): UseQueryReturn<T> => {
  const [data, setData] = React.useState<T>(initialValue);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fetchedData = await request();
        setData(fetchedData);
      } catch (err) {
        if (typeof err === 'string') {
          setErrorMessage(err);
        } else if (err instanceof Error) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage('Error using useQuery');
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [request]);

  return { data, loading, errorMessage };
};

export default useQuery;
