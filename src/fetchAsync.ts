import fetchImpl from 'node-fetch';
import fetchCookieDecorator from 'fetch-cookie';

const fetchAsync = fetchCookieDecorator(fetchImpl);
export default fetchAsync;
