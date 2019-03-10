export interface TsValContainer {
    ts_val: number;
}
export interface SmonCalcResult {
    smonChecker: string;
    smonTmVal: number;
    body: string;
}
export default function calculateSmon<TData extends TsValContainer>(data: TData): SmonCalcResult;
