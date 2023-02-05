import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useQuery from '../../../hooks/use-query';
import ApiService from '../../../services/api-services';

const SingleCerealPage = () => {
  const { cerealId } = useParams();
  if (cerealId === undefined) return <Navigate to="/not-found-page" />;

  // eslint-disable-next-line max-len
  const { data: cereal, errorMessage } = useQuery(async () => ApiService.fetchCereal(cerealId), null);
  if (errorMessage !== null) return <Navigate to="/not-found-page" />;

  return (
    <div>
      {cereal && (
        <pre>
          {JSON.stringify(cereal, null, 4)}
        </pre>
      )}
    </div>
  );
};

export default SingleCerealPage;
