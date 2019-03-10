import Command from '../Command';
export default interface GatewayRequestBase {
    command: Command;
    wizard_id: Nullable<number>;
    proto_ver: number;
    infocsv: string;
    session_key: string;
    channel_uid: number;
}
