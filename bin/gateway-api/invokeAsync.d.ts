import GatewayRequestBase from '../request-contracts/GatewayRequestBase';
import GatewayResponseBase from '../response-contracts/GatewayResponseBase';
export default function invokeAsync<TRequest extends GatewayRequestBase, TResponse extends GatewayResponseBase>(host: string, userAgent: string, request: TRequest): Promise<TResponse>;
