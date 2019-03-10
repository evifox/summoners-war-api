import { Request, RequestInit, Response } from 'node-fetch';

export declare interface ExtendedRequestInit extends RequestInit {
  credentials?: 'include';
}

declare function index(
  fetch: (url: string | Request, init?: RequestInit | undefined) => Promise<Response>,
  jar?: any
): (url: string | Request, init?: ExtendedRequestInit | undefined) => Promise<Response>;

export default index;
