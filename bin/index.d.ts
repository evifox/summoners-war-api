import Difficulty from './Difficulty';
import GameInfoModel from './middle-contracts/GameInfoModel';
import Scenario from './Scenario';
import Stage from './Stage';
export default class Api {
    private gameInfoModel;
    constructor();
    login(): Promise<void>;
    readonly gameInfo: Nullable<GameInfoModel>;
    readonly units: Nullable<Unit[]>;
    goScenario(scenario: Scenario, difficulty: Difficulty, stage: Stage, unitIds: number[]): Promise<object>;
}
export interface Unit {
    id: number;
    type: string;
    attribute: string;
    awakened: boolean;
    level: number;
    class: number;
}
