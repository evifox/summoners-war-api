export default interface GetVersionInfoResponse {
  version_data: VersionDataModel[];
  hub_test_server: number;
  download_gauge_count: number;
  background_download: number;
  game_values: GameValuesModel;
}

export interface VersionDataModel {
  game_index: string;
  topic: VersionDataTopic;
  name: string;
  version: string;
  cdnroot: string;
}

export enum VersionDataTopic {
  infocsv = 'infocsv',
  cdnres = 'cdnres',
  protocol = 'protocol',
  ban_appid = 'ban_appid',
  intro = 'intro',
  text = 'text'
}

export interface GameValuesModel {
  ag_enable: number;
  downloadlog_interval: number;
  emergency: number;
  emergency_hive_try: number;
  download_newuser: number;
  google_noti_integrate: number;
  media_menu_enable: number;
}
