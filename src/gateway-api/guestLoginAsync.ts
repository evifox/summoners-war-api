import { keyBy } from 'lodash';
import Command from '../command';
import Country from '../Country';
import Language from '../Language';
import GameInfoModel from '../middle-contracts/GameInfoModel';
import ItemModel from '../middle-contracts/ItemModel';
import NpcFriendModel from '../middle-contracts/NpcFriendModel';
import RuneModel from '../middle-contracts/RuneModel';
import UnitModel from '../middle-contracts/UnitModel';
import GuestLoginRequest from '../request-contracts/GuestLoginRequest';
import GuestLoginResponse, { NpcFriendIndexItem } from '../response-contracts/GuestLoginResponse';
import ReturnCode from '../ReturnCode';
import getVersionInfoAsync from '../version-info-api/getVersionInfoAsync';
import invokeAsync from './invokeAsync';

export default async function guestLoginAsync(
  host: string,
  userAgent: string,
  gameIndex: number,
  appVersion: string,
  userId: number,
  deviceId: number,
  country: Country,
  language: Language,
  macAddress: string,
  deviceName: string,
  osVersion: string,
  advertisingId: string,
  createIfNotExist: boolean
): Promise<GameInfoModel> {
  const versionInfo = await getVersionInfoAsync(host, userAgent, gameIndex);
  const response = await invokeAsync<GuestLoginRequest, GuestLoginResponse>(host, userAgent, {
    command: Command.guestLogin,
    adid: advertisingId,
    app_version: appVersion,
    binary_check: '',
    binary_size: 0,
    channel_uid: userId,
    country: country,
    create_if_not_exist: createIfNotExist ? 1 : 0,
    device_name: deviceName,
    did: deviceId,
    game_index: gameIndex,
    idfv: '00000000-0000-0000-0000-000000000000',
    infocsv: versionInfo.infocsv,
    is_emulator: 0,
    lang: language,
    lang_game: 1,
    mac_address: macAddress,
    os_version: osVersion,
    proto_ver: versionInfo.protocol,
    push: 1,
    session_key: userId.toString(),
    token: '0000000000000000000000000000000000000000000000000000000000000000',
    uid: userId,
    wizard_id: null
  });
  if (response.ret_code !== ReturnCode.ok) throw JSON.stringify(response, null, 2);
  return {
    userAgent: userAgent,
    arenaEnergy: response.wizard_info!.arena_energy,
    arenaEnergyMax: response.wizard_info!.arena_energy_max,
    channelUid: userId,
    crystal: response.wizard_info!.wizard_crystal,
    currentSummonSpecialUnitIds: response.summon_special_info!.this,
    defenseUnitIds: response.defense_unit_list!.map(unit => unit.unit_id),
    energy: response.wizard_info!.wizard_energy,
    energyMax: response.wizard_info!.energy_max,
    energyPerMin: response.wizard_info!.energy_per_min,
    eventCoin: response.wizard_info!.event_coin,
    guildPoint: response.wizard_info!.guild_point,
    honorPoint: response.wizard_info!.honor_point,
    host: host,
    infocsv: versionInfo.infocsv,
    itemsIndex: keyBy(
      response.inventory_info!.map(
        item =>
          <ItemModel>{
            masterId: item.item_master_id,
            type: item.item_master_type,
            quantity: item.item_quantity
          }
      ),
      (item: ItemModel) => item.masterId
    ),
    level: response.wizard_info!.wizard_level,
    mana: response.wizard_info!.wizard_mana,
    name: response.wizard_info!.wizard_name,
    nextArenaEnergyGain: response.wizard_info!.arena_energy_next_gain,
    nextEnergyGain: response.wizard_info!.next_energy_gain,
    nextWishUpdate: response.wish_list!.next_update,
    obstacleIds: response.obstacle_list!.map(item => item.obstacle_id),
    protocol: versionInfo.protocol,
    runesIndex: keyBy(
      response.runes!.map(
        item =>
          <RuneModel>{
            class: item.class,
            currentUpgrade: item.upgrade_curr,
            rank: item.rank,
            runeId: item.rune_id,
            set: item.set_id,
            slot: item.slot_no,
            upgradeLimit: item.upgrade_limit
          }
      ),
      (item: RuneModel) => item.runeId
    ),
    sessionKey: userId.toString(),
    unitsIndex: keyBy(
      response.unit_list!.map(
        item =>
          <UnitModel>{
            attribute: item.unit_master_id % 10,
            awakened: ((item.unit_master_id % 100) / 10) << 0 > 0,
            class: item.class,
            level: item.unit_level,
            type: (item.unit_master_id / 100) << 0,
            unitId: item.unit_id
          }
      ),
      (item: UnitModel) => item.unitId
    ),
    wishRemained: response.wish_list!.trial_remained,
    wizardId: response.wizard_info!.wizard_id,
    npcFriendIndex: Object.values(response.npc_friend_list!).map(
      (item: NpcFriendIndexItem) =>
        <NpcFriendModel>{
          nextAssistTime: item.next_assist_time,
          npcFriendId: item.npc_friend_id,
          npcFriendLevel: item.npc_friend_level,
          unitClass: item.unit_class,
          unitId: item.unit_id,
          unitLevel: item.unit_level,
          unitMasterId: item.unit_master_id,
          wizardId: item.wizard_id
        }
    )
  };
}
