import Command from '../Command';
import ReturnCode from '../ReturnCode';
export default interface GatewayResponseBase {
    command: Command;
    ret_code: ReturnCode;
    ts_val: number;
    tvalue: number;
    tvaluelocal: number;
    tzone: string;
}
