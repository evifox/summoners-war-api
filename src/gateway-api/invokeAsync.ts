import { decryptResponse } from 'summoners-war-encoder';
import calculateSmon from '../calculateSmon';
import fetchAsync from '../fetchAsync';
import GatewayRequestBase from '../request-contracts/GatewayRequestBase';
import GatewayResponseBase from '../response-contracts/GatewayResponseBase';
import UtcTime from '../UtcTime';

export default async function invokeAsync<
  TRequest extends GatewayRequestBase,
  TResponse extends GatewayResponseBase
>(host: string, userAgent: string, request: TRequest): Promise<TResponse> {
  const smonCalcResult = calculateSmon({
    ...request,
    ts_val: UtcTime.nowInSeconds
  });
  const response = await fetchAsync(`http://${host}/api/gateway_c2.php`, {
    method: 'POST',
    headers: {
      ['SmonChecker']: smonCalcResult.smonChecker,
      ['SmonTmVal']: smonCalcResult.smonTmVal.toString(),
      ['User-Agent']: userAgent,
      ['Content-Type']: 'application/octet-stream',
      ['Accept-Encoding']: 'gzip'
    },
    credentials: 'include',
    body: smonCalcResult.body
  });
  const body = await response.text();
  return <TResponse>JSON.parse(decryptResponse(body));
}
