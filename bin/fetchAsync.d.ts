declare const fetchAsync: (url: string | import("node-fetch").Request, init?: import("../types/fetch-cookie").ExtendedRequestInit | undefined) => Promise<import("node-fetch").Response>;
export default fetchAsync;
