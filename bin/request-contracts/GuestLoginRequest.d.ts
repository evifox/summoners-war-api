import Country from '../Country';
import Language from '../Language';
import NumBool from '../NumBool';
import Command from './../Command';
import GatewayRequestBase from './GatewayRequestBase';
export default interface GuestLoginRequest extends GatewayRequestBase {
    command: Command.guestLogin;
    wizard_id: null;
    game_index: number;
    app_version: string;
    uid: number;
    did: number;
    channel_uid: number;
    push: 1;
    is_emulator: 0;
    country: Country;
    lang: Language;
    lang_game: 1;
    mac_address: string;
    device_name: string;
    os_version: string;
    token: '0000000000000000000000000000000000000000000000000000000000000000';
    idfv: '00000000-0000-0000-0000-000000000000';
    adid: string;
    binary_size: 0;
    binary_check: '';
    create_if_not_exist: NumBool;
}
