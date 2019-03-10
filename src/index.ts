import Attribute from './Attribute';
import Country from './Country';
import Difficulty from './Difficulty';
import goScenarioAsync from './gateway-api/goScenarioAsync';
import guestLoginAsync from './gateway-api/guestLoginAsync';
import Language from './Language';
import GameInfoModel from './middle-contracts/GameInfoModel';
import UnitModel from './middle-contracts/UnitModel';
import Monster from './Monster';
import Scenario from './Scenario';
import Stage from './Stage';

const host = 'summonerswar-gb.qpyou.cn';
const userAgent = 'Dalvik/2.1.0 (Linux; U; Android 9; Mi A1 MIUI/V10.0.5.0.PDHMIXM)';
const gameIndex = 2624;
const appVersion = '4.2.3';
const userId = 90195446442;
const deviceId = 557019587;
const country = Country.ru;
const language = Language.ru;
const macAddress = '02:00:00:00:00:00';
const device = 'Mi A1';
const osVersion = '9';
const advertisingId = '3ad3066b-e83c-44d3-b782-5877ca55f1a5';

export default class Api {
  private gameInfoModel: Nullable<GameInfoModel>;

  constructor() {
    this.gameInfoModel = null;
  }

  async login(): Promise<void> {
    this.gameInfoModel = await guestLoginAsync(
      host,
      userAgent,
      gameIndex,
      appVersion,
      userId,
      deviceId,
      country,
      language,
      macAddress,
      device,
      osVersion,
      advertisingId,
      false
    );
  }

  get gameInfo(): Nullable<GameInfoModel> {
    return this.gameInfoModel;
  }

  get units(): Nullable<Unit[]> {
    return this.gameInfoModel
      ? Object.values(this.gameInfoModel.unitsIndex).map(
          (unit: UnitModel) =>
            <Unit>{
              attribute: Attribute[unit.attribute],
              awakened: unit.awakened,
              id: unit.unitId,
              type: Monster[unit.type],
              class: unit.class,
              level: unit.level
            }
        )
      : null;
  }

  async goScenario(
    scenario: Scenario,
    difficulty: Difficulty,
    stage: Stage,
    unitIds: number[]
  ): Promise<object> {
    if (!this.gameInfoModel) throw 'Login before!';
    return await goScenarioAsync(this.gameInfoModel, scenario, difficulty, stage, unitIds);
  }
}

export interface Unit {
  id: number;
  type: string;
  attribute: string;
  awakened: boolean;
  level: number;
  class: number;
}
