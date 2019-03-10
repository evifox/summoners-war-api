import sha1 from 'sha1';
import { encryptRequest } from 'summoners-war-encoder';

export interface TsValContainer {
  ts_val: number;
}

export interface SmonCalcResult {
  smonChecker: string;
  smonTmVal: number;
  body: string;
}

export default function calculateSmon<TData extends TsValContainer>(data: TData): SmonCalcResult {
  const body = encryptRequest(JSON.stringify(data));
  const smonChecker = sha1(`60e2e90bb43b37fb${body}${data.ts_val}`);
  const smonTmVal = 1186835363;
  return {
    smonChecker: smonChecker.toString(),
    smonTmVal: smonTmVal,
    body: body
  };
}
