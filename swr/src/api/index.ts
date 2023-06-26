import { SWRConfiguration } from 'swr';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const swrConfigObject: SWRConfiguration = {
  refreshInterval: 0,
  revalidateOnFocus: false,
  fetcher: fetcher,
};
