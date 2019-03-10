import { encryptRequest, decryptResponse } from 'summoners-war-encoder';
import fetchAsync from '../fetchAsync';

export default async function invokeAsync<TRequest, TResponse>(
  host: string,
  userAgent: string,
  request: TRequest
): Promise<TResponse> {
  const response = await fetchAsync(`http://${host}/api/version_info_c2.php`, {
    method: 'POST',
    headers: {
      ['User-Agent']: userAgent,
      ['Content-Type']: 'application/octet-stream',
      ['Accept-Encoding']: 'gzip'
    },
    body: encryptRequest(JSON.stringify(request))
  });
  const body = await response.text();
  return <TResponse>JSON.parse(decryptResponse(body));
}
