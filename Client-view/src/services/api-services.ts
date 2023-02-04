import axios from 'axios';
import CerealsModel from 'models/cereals';

const serverApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: 'http://localhost:5007',
});

const fetchCereals = async () => {
  const { status, data: cereals } = await serverApi.get<CerealsModel[]>('/cereals');

  if (status !== 200) {
    throw new Error('Server error: failed to fetch cereals');
  }

  return cereals;
};

const ApiServices = {
  fetchCereals,
};

export default ApiServices;
