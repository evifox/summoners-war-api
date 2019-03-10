"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const command_1 = __importDefault(require("../command"));
const ReturnCode_1 = __importDefault(require("../ReturnCode"));
const getVersionInfoAsync_1 = __importDefault(require("../version-info-api/getVersionInfoAsync"));
const invokeAsync_1 = __importDefault(require("./invokeAsync"));
function guestLoginAsync(host, userAgent, gameIndex, appVersion, userId, deviceId, country, language, macAddress, deviceName, osVersion, advertisingId, createIfNotExist) {
    return __awaiter(this, void 0, void 0, function* () {
        const versionInfo = yield getVersionInfoAsync_1.default(host, userAgent, gameIndex);
        const response = yield invokeAsync_1.default(host, userAgent, {
            command: command_1.default.guestLogin,
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
        if (response.ret_code !== ReturnCode_1.default.ok)
            throw JSON.stringify(response, null, 2);
        return {
            userAgent: userAgent,
            arenaEnergy: response.wizard_info.arena_energy,
            arenaEnergyMax: response.wizard_info.arena_energy_max,
            channelUid: userId,
            crystal: response.wizard_info.wizard_crystal,
            currentSummonSpecialUnitIds: response.summon_special_info.this,
            defenseUnitIds: response.defense_unit_list.map(unit => unit.unit_id),
            energy: response.wizard_info.wizard_energy,
            energyMax: response.wizard_info.energy_max,
            energyPerMin: response.wizard_info.energy_per_min,
            eventCoin: response.wizard_info.event_coin,
            guildPoint: response.wizard_info.guild_point,
            honorPoint: response.wizard_info.honor_point,
            host: host,
            infocsv: versionInfo.infocsv,
            itemsIndex: lodash_1.keyBy(response.inventory_info.map(item => ({
                masterId: item.item_master_id,
                type: item.item_master_type,
                quantity: item.item_quantity
            })), (item) => item.masterId),
            level: response.wizard_info.wizard_level,
            mana: response.wizard_info.wizard_mana,
            name: response.wizard_info.wizard_name,
            nextArenaEnergyGain: response.wizard_info.arena_energy_next_gain,
            nextEnergyGain: response.wizard_info.next_energy_gain,
            nextWishUpdate: response.wish_list.next_update,
            obstacleIds: response.obstacle_list.map(item => item.obstacle_id),
            protocol: versionInfo.protocol,
            runesIndex: lodash_1.keyBy(response.runes.map(item => ({
                class: item.class,
                currentUpgrade: item.upgrade_curr,
                rank: item.rank,
                runeId: item.rune_id,
                set: item.set_id,
                slot: item.slot_no,
                upgradeLimit: item.upgrade_limit
            })), (item) => item.runeId),
            sessionKey: userId.toString(),
            unitsIndex: lodash_1.keyBy(response.unit_list.map(item => ({
                attribute: item.unit_master_id % 10,
                awakened: ((item.unit_master_id % 100) / 10) << 0 > 0,
                class: item.class,
                level: item.unit_level,
                type: (item.unit_master_id / 100) << 0,
                unitId: item.unit_id
            })), (item) => item.unitId),
            wishRemained: response.wish_list.trial_remained,
            wizardId: response.wizard_info.wizard_id,
            npcFriendIndex: Object.values(response.npc_friend_list).map((item) => ({
                nextAssistTime: item.next_assist_time,
                npcFriendId: item.npc_friend_id,
                npcFriendLevel: item.npc_friend_level,
                unitClass: item.unit_class,
                unitId: item.unit_id,
                unitLevel: item.unit_level,
                unitMasterId: item.unit_master_id,
                wizardId: item.wizard_id
            }))
        };
    });
}
exports.default = guestLoginAsync;
