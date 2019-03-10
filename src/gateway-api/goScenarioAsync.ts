import Command from '../command';
import Difficulty from '../Difficulty';
import GameInfoModel from '../middle-contracts/GameInfoModel';
import NumBool from '../NumBool';
import GatewayRequestBase from '../request-contracts/GatewayRequestBase';
import GatewayResponseBase from '../response-contracts/GatewayResponseBase';
import WizardInfoModel from '../response-contracts/WizardInfoModel';
import ReturnCode from '../ReturnCode';
import Scenario from '../Scenario';
import Stage from '../Stage';
import invokeAsync from './invokeAsync';
import { flatten } from 'lodash';

interface UnitId {
  unit_id: number;
}
interface Helper {
  wizard_id: number;
  unit_id: number;
}

interface BattleScenarioStartRequest extends GatewayRequestBase {
  region_id: Scenario;
  stage_no: Stage;
  difficulty: Difficulty;
  unit_id_list: UnitId[];
  helper_list: Helper[];
  mentor_helper_list: Helper[];
  npc_friend_helper_list: Helper[];
  retry: NumBool;
}

interface OppUnit {
  unit_id: number;
  unit_master_id: number;
  unit_level: number;
  size_scale: number;
  class: number;
  con: number;
  atk: number;
  def: number;
  spd: number;
  resist: number;
  attribute: number;
  boss: NumBool;
}

interface UnitDrop {
  unit_id: number;
  unit_level: number;
  drop_mana: number;
  drop_energy: number;
  drop_crystal: number;
  jackpot: NumBool;
}

interface BattleScenarioStartResponse extends GatewayResponseBase {
  wizard_info: WizardInfoModel;
  unit_id_list: UnitId[];
  opp_unit_list: OppUnit[][];
  unit_drop_list: UnitDrop[];
  helper_list: [];
  helper_unit_list: [];
  mentor_helper_list: [];
  npc_friend_list: [];
  battle_key: number;
}

enum OppUnitResult {
  defined = 2
}

interface OppUnitStatus {
  unit_id: number;
  result: OppUnitResult;
}

interface Position {
  island_id: number;
  pos_x: number;
  pos_y: number;
}

interface BattleScenarioResultRequest extends GatewayRequestBase {
  battle_key: number;
  win_lose: NumBool;
  opp_unit_status_list: OppUnitStatus[];
  unit_id_list: UnitId[];
  position: Position;
  clear_time: number;
  retry: NumBool;
}

interface ClearTime {
  is_new_record: NumBool;
  current_time: number;
  best_time: number;
}

interface ScenarioInfo {
  wizard_id: number;
  region_id: Scenario;
  difficulty: Difficulty;
  stage_no: Stage;
  cleared: NumBool;
}

interface BattleScenarioResultResponse extends GatewayResponseBase {
  win_lose: NumBool;
  clear_time: ClearTime;
  scenario_info: ScenarioInfo;
  reward: object;
  wizard_info: WizardInfoModel;
  unit_list: object[];
}

export default async function goScenarioAsync(
  gameInfoModel: GameInfoModel,
  scenario: Scenario,
  difficulty: Difficulty,
  stage: Stage,
  unitIds: number[]
): Promise<object> {
  const startResponse = await invokeAsync<BattleScenarioStartRequest, BattleScenarioStartResponse>(
    gameInfoModel.host,
    gameInfoModel.userAgent,
    {
      command: Command.battleScenarioStart,
      channel_uid: gameInfoModel.channelUid,
      difficulty: difficulty,
      helper_list: [],
      infocsv: gameInfoModel.infocsv,
      mentor_helper_list: [],
      npc_friend_helper_list: [],
      proto_ver: gameInfoModel.protocol,
      region_id: scenario,
      retry: 0,
      session_key: gameInfoModel.sessionKey,
      stage_no: stage,
      unit_id_list: unitIds.map(
        unitId =>
          <UnitId>{
            unit_id: unitId
          }
      ),
      wizard_id: gameInfoModel.wizardId
    }
  );
  if (startResponse.ret_code !== ReturnCode.ok) throw JSON.stringify(startResponse, null, 2);
  const resultResponse = await invokeAsync<
    BattleScenarioResultRequest,
    BattleScenarioResultResponse
  >(gameInfoModel.host, gameInfoModel.userAgent, {
    battle_key: startResponse.battle_key,
    channel_uid: gameInfoModel.channelUid,
    clear_time: 4 * 60 * 1000,
    command: Command.battleScenarioResult,
    infocsv: gameInfoModel.infocsv,
    opp_unit_status_list: flatten(startResponse.opp_unit_list).map(
      item =>
        <OppUnitStatus>{
          unit_id: item.unit_id,
          result: OppUnitResult.defined
        }
    ),
    position: {
      island_id: 1,
      pos_x: 14,
      pos_y: 24
    },
    proto_ver: gameInfoModel.protocol,
    retry: 0,
    session_key: gameInfoModel.sessionKey,
    unit_id_list: unitIds.map(
      unitId =>
        <UnitId>{
          unit_id: unitId
        }
    ),
    win_lose: 1,
    wizard_id: gameInfoModel.wizardId
  });
  return resultResponse.reward;
}
